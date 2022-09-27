import fs from "fs";
import * as openrpc from "@open-rpc/schema-utils-js";
import * as metaschema from "@open-rpc/meta-schema";
import YAML from "yaml";
import chalk from "chalk";
import kebabCase from "lodash/kebabCase";
import {
  APIOptions,
  ApiMetadata,
  MethodPageMetadata,
  InfoPageMetadata,
  TagPageMetadata,
  TagObject,
  SidebarOptions
} from "./types";

interface OpenrpcFiles {
  source: string;
  sourceDirName: string;
  data: metaschema.OpenrpcDocument;
}

export async function readOpenrpcFiles(
  source: string,
  _options: APIOptions
): Promise<OpenrpcFiles[]> {
  let content = fs.readFileSync(source).toString();
  if (source.endsWith(".yaml") || source.endsWith(".yml")) {
    content = YAML.parse(content);
  }

  return [
    {
      source,
      sourceDirName: ".",
      data: await openrpc.parseOpenRPCDocument(content, { validate: true }),
    },
  ];
}

export async function processOpenrpcFiles(
  files: OpenrpcFiles[],
  sidebarOptions: SidebarOptions
): Promise<[ApiMetadata[], TagObject[][]]> {
  const promises = files.map(async (file) => {
    if (file.data !== undefined) {
      const [metadatas, tags] = await processOpenrpcFile(file.data, sidebarOptions);
      const itemsObjectsArray = metadatas.map((item) => ({
        ...item,
      }));
      return [itemsObjectsArray, tags];
    }
    console.warn(
      chalk.yellow(
        `WARNING: the following OpenRPC spec returned undefined: ${file.source}`
      )
    );
    return [];
  });
  const metadata = await Promise.all(promises);
  const items = metadata
    .map(function (x) {
      return x[0];
    })
    .flat()
    .filter(function (x) {
      // Remove undefined items due to transient parsing errors
      return x !== undefined;
    });
  const tags = metadata
    .map(function (x) {
      return x[1];
    })
    .filter(function (x) {
      // Remove undefined tags due to transient parsing errors
      return x !== undefined;
    });
  return [items as ApiMetadata[], tags as TagObject[][]];
}

export async function processOpenrpcFile(
  data: metaschema.OpenrpcDocument,
  sidebarOptions: SidebarOptions
): Promise<[ApiMetadata[], TagObject[]]> {
  const items = createItems(data, sidebarOptions);

  // TODO: Get the tags from the items
  let tags: TagObject[] = [];
  if (data.tags !== undefined) {
    tags = data.tags;
  }
  return [items, tags];
}

type PartialPage<T> = Omit<T, "permalink" | "source" | "sourceDirName">;

function createItems(
  data: metaschema.OpenrpcDocument,
  sidebarOptions: SidebarOptions
): ApiMetadata[] {
  // TODO: Find a better way to handle this
  let items: PartialPage<ApiMetadata>[] = [];
  const infoId = kebabCase(data.info.title);

  const allTags: TagObject[] = Object.values(data.components?.tags ?? {})
  console.debug({allTags});
  console.debug({categoryLinkSource: sidebarOptions?.categoryLinkSource});
  if (sidebarOptions?.categoryLinkSource === "tag") {
    // Only create an tag pages if categoryLinkSource set to tag.
    for (let tag of allTags) {
      if (tag.description?.includes("SchemaDefinition")) {
        continue;
      }
      items.push(processTagObject(tag, allTags));
    }
  }

  if (data.info.description) {
    // Only create an info page if we have a description.
    const infoPage: PartialPage<InfoPageMetadata> = {
      type: "info",
      id: infoId,
      unversionedId: infoId,
      title: data.info.title,
      description: data.info.description,
      frontMatter: {},
      info: {
        ...data.info,
        tags: data.tags,
        title: data.info.title ?? "Introduction",
        logo: data.info["x-logo"]! as any,
        darkLogo: data.info["x-dark-logo"]! as any,
      },
    };
    items.push(infoPage);
  }

  for (let method of Object.values(data.methods)) {
    method = resolveRef(method, data);
    let {
      name,
      description,
      summary,
      servers,
    } = method;

    const id = kebabCase(name);
    servers = servers ?? data.servers;

    const methodPage: PartialPage<MethodPageMetadata> = {
      type: "method",
      id,
      infoId: infoId ?? "",
      unversionedId: id,
      title: method.name,
      description: description ?? "",
      frontMatter: {},
      method: {
        ...method,
        description,
        info: data.info,
        result: resolveRef(method.result, data),
        servers,
        summary: summary ?? description ?? "",
        tags: method.tags?.map((tag) => resolveRef(tag, data)),
      },
    };

    items.push(methodPage);
  }

  return items as ApiMetadata[];
}

// order for picking items as a display name of tags
const tagDisplayNameProperties = ["x-displayName", "name"] as const;

export function getTagDisplayName(tagName: string, tags: TagObject[]): string {
  // find the very own tagObject
  const tagObject = tags.find((tagObject) => tagObject.name === tagName) ?? {
    // if none found, just fake one
    name: tagName,
  };

  // return the first found and filled value from the property list
  for (const property of tagDisplayNameProperties) {
    const displayName = tagObject[property];
    if (typeof displayName === "string") {
      return displayName;
    }
  }

  // always default to the tagName
  return tagName;
}

function processTagObject(tag: TagObject, tags: TagObject[] = []): PartialPage<TagPageMetadata> {
  const description = getTagDisplayName(tag.name!, tags);
  const id = kebabCase(tag.name);
  return {
    type: "tag",
    id,
    unversionedId: id,
    title: description ?? "",
    description: description ?? "",
    frontMatter: {},
    tag: {
      ...tag,
    },
  };
}

function resolveRef<T>(obj: T | {$ref: string}, doc: metaschema.OpenrpcDocument): T {
  if (!('$ref' in obj)) {
    return obj;
  }
  let ref = obj['$ref'];
  let ptr = doc;
  for (const part in ref.slice(2).split('/')) {
    if (part in ptr) {
      ptr = ptr[part];
    } else {
      throw new Error(`Could not resolve reference ${ref}`);
    }
  }
  return ptr as T;
}
