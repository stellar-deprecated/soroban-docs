import fs from "fs";
import path from "path";

import type { LoadContext, Plugin } from "@docusaurus/types";
import { Globby } from "@docusaurus/utils";
import chalk from "chalk";
import { render } from "mustache";
import { readOpenrpcFiles, processOpenrpcFiles } from "./openrpc";

import { createMethodPageMD, createInfoPageMD, createTagPageMD } from "./markdown";
import { OptionsSchema } from "./options";
// import generateSidebarSlice from "./sidebars";
import type { PluginOptions, LoadedContent, APIOptions } from "./types";

export function isURL(str: string): boolean {
  return /^(https?:)\/\//m.test(str);
}

export function getDocsData(
  dataArray: any[],
  filter: string
): Object | undefined {
  // eslint-disable-next-line array-callback-return
  const filteredData = dataArray.filter((data) => {
    if (data[0] === filter) {
      return data[1];
    }

    // Search plugin-content-docs instances
    if (data[0] === "@docusaurus/plugin-content-docs") {
      const pluginId = data[1].id ? data[1].id : "default";
      if (pluginId === filter) {
        return data[1];
      }
    }
  })[0];
  if (filteredData) {
    // Search presets, e.g. "classic"
    if (filteredData[0] === filter) {
      return filteredData[1].docs;
    }

    // Search plugin-content-docs instances
    if (filteredData[0] === "@docusaurus/plugin-content-docs") {
      const pluginId = filteredData[1].id ? filteredData[1].id : "default";
      if (pluginId === filter) {
        return filteredData[1];
      }
    }
  }
  return;
}

export default function pluginOpenRPCDocs(
  context: LoadContext,
  options: PluginOptions
): Plugin<LoadedContent> {
  const { config, docsPluginId } = options;
  const { siteDir, siteConfig } = context;

  // Get routeBasePath and path from plugin-content-docs or preset
  const presets: any = siteConfig.presets;
  const plugins: any = siteConfig.plugins;
  const presetsPlugins = presets.concat(plugins);
  const docData: any = getDocsData(presetsPlugins, docsPluginId);
  const docRouteBasePath = docData ? docData.routeBasePath : undefined;
  const docPath = docData ? (docData.path ? docData.path : "docs") : undefined;

  async function generateApiDocs(options: APIOptions) {
    let { specPath, outputDir, template, sidebarOptions } = options;

    const contentPath = isURL(specPath)
      ? specPath
      : path.resolve(siteDir, specPath);

    try {
      const openapiFiles = await readOpenrpcFiles(contentPath, options);
      const [loadedApi, tags] = await processOpenrpcFiles(
        openapiFiles,
        sidebarOptions!
      );
      if (!fs.existsSync(outputDir)) {
        try {
          fs.mkdirSync(outputDir, { recursive: true });
          console.log(chalk.green(`Successfully created "${outputDir}"`));
        } catch (err) {
          console.error(
            chalk.red(`Failed to create "${outputDir}"`),
            chalk.yellow(err)
          );
        }
      }

      // TODO: figure out better way to set default
      // if (Object.keys(sidebarOptions ?? {}).length > 0) {
      //   const sidebarSlice = generateSidebarSlice(
      //     sidebarOptions!,
      //     options,
      //     loadedApi,
      //     tags,
      //     docPath
      //   );

      //   const sidebarSliceTemplate = template
      //     ? fs.readFileSync(template).toString()
      //     : `module.exports = {{{slice}}};`;

      //   const view = render(sidebarSliceTemplate, {
      //     slice: JSON.stringify(sidebarSlice),
      //   });

      //   if (!fs.existsSync(`${outputDir}/sidebar.js`)) {
      //     try {
      //       fs.writeFileSync(`${outputDir}/sidebar.js`, view, "utf8");
      //       console.log(
      //         chalk.green(`Successfully created "${outputDir}/sidebar.js"`)
      //       );
      //     } catch (err) {
      //       console.error(
      //         chalk.red(`Failed to write "${outputDir}/sidebar.js"`),
      //         chalk.yellow(err)
      //       );
      //     }
      //   }
      // }

      loadedApi.map(async (item) => {
        const view =
          item.type === "method"
            ? createMethodPageMD(item, docRouteBasePath, docPath, outputDir)
            : item.type === "info"
            ? createInfoPageMD(item)
            : createTagPageMD(item);

        let outfile = `${outputDir}/${item.id}.${item.type}.mdx`;
        if (!fs.existsSync(outfile)) {
          try {
            fs.writeFileSync(outfile, view, "utf8");
            console.log(
              chalk.green(
                `Successfully created "${outfile}"`
              )
            );
          } catch (err) {
            console.error(
              chalk.red(`Failed to write "${outfile}"`),
              chalk.yellow(err)
            );
          }
        }
      });

      return;
    } catch (e) {
      console.error(chalk.red(`Loading of api failed for "${contentPath}"`));
      throw e;
    }
  }

  async function cleanApiDocs(options: APIOptions) {
    const { outputDir } = options;
    const apiDir = path.join(siteDir, outputDir);
    const apiMdxFiles = await Globby(["*.api.mdx", "*.info.mdx", "*.tag.mdx"], {
      cwd: path.resolve(apiDir),
      deep: 1,
    });
    const sidebarFile = await Globby(["sidebar.js"], {
      cwd: path.resolve(apiDir),
      deep: 1,
    });
    apiMdxFiles.map((mdx) =>
      fs.unlink(`${apiDir}/${mdx}`, (err) => {
        if (err) {
          console.error(
            chalk.red(`Cleanup failed for "${apiDir}/${mdx}"`),
            chalk.yellow(err)
          );
        } else {
          console.log(chalk.green(`Cleanup succeeded for "${apiDir}/${mdx}"`));
        }
      })
    );

    sidebarFile.map((sidebar) =>
      fs.unlink(`${apiDir}/${sidebar}`, (err) => {
        if (err) {
          console.error(
            chalk.red(`Cleanup failed for "${apiDir}/${sidebar}"`),
            chalk.yellow(err)
          );
        } else {
          console.log(
            chalk.green(`Cleanup succeeded for "${apiDir}/${sidebar}"`)
          );
        }
      })
    );
  }

  async function generateVersions(versions: object, outputDir: string) {
    let versionsArray = [] as object[];
    for (const [version, metadata] of Object.entries(versions)) {
      versionsArray.push({
        version: version,
        label: metadata.label,
        baseUrl: metadata.baseUrl,
      });
    }

    const versionsJson = JSON.stringify(versionsArray, null, 2);
    try {
      fs.writeFileSync(`${outputDir}/versions.json`, versionsJson, "utf8");
      console.log(
        chalk.green(`Successfully created "${outputDir}/versions.json"`)
      );
    } catch (err) {
      console.error(
        chalk.red(`Failed to write "${outputDir}/versions.json"`),
        chalk.yellow(err)
      );
    }
  }

  async function cleanVersions(outputDir: string) {
    if (fs.existsSync(`${outputDir}/versions.json`)) {
      fs.unlink(`${outputDir}/versions.json`, (err) => {
        if (err) {
          console.error(
            chalk.red(`Cleanup failed for "${outputDir}/versions.json"`),
            chalk.yellow(err)
          );
        } else {
          console.log(
            chalk.green(`Cleanup succeeded for "${outputDir}/versions.json"`)
          );
        }
      });
    }
  }

  return {
    name: `docusaurus-plugin-openrpc-docs`,

    extendCli(cli): void {
      cli
        .command(`gen-api-docs`)
        .description(
          `Generates OpenRPC docs in MDX file format and sidebar.js (if enabled).`
        )
        .usage("<id>")
        .arguments("<id>")
        .action(async (id) => {
          if (id === "all") {
            if (config[id]) {
              console.error(
                chalk.red(
                  "Can't use id 'all' for OpenRPC docs configuration key."
                )
              );
            } else {
              Object.keys(config).forEach(async function (key) {
                await generateApiDocs(config[key]);
              });
            }
          } else if (!config[id]) {
            console.error(
              chalk.red(`ID '${id}' does not exist in OpenRPC docs config.`)
            );
          } else {
            await generateApiDocs(config[id]);
          }
        });

      cli
        .command(`gen-api-docs:version`)
        .description(
          `Generates versioned OpenRPC docs in MDX file format, versions.js and sidebar.js (if enabled).`
        )
        .usage("<id:version>")
        .arguments("<id:version>")
        .action(async (id) => {
          const [parentId, versionId] = id.split(":");
          const parentConfig = Object.assign({}, config[parentId]);

          const version = parentConfig.version as string;
          const label = parentConfig.label as string;
          const baseUrl = parentConfig.baseUrl as string;

          let parentVersion = {} as any;
          parentVersion[version] = { label: label, baseUrl: baseUrl };

          const { versions } = config[parentId] as any;
          const mergedVersions = Object.assign(parentVersion, versions);

          // Prepare for merge
          delete parentConfig.versions;
          delete parentConfig.version;
          delete parentConfig.label;
          delete parentConfig.baseUrl;

          // TODO: handle when no versions are defined by version command is passed
          if (versionId === "all") {
            if (versions[id]) {
              console.error(
                chalk.red(
                  "Can't use id 'all' for OpenRPC docs versions configuration key."
                )
              );
            } else {
              await generateVersions(mergedVersions, parentConfig.outputDir);
              Object.keys(versions).forEach(async (key) => {
                const versionConfig = versions[key];
                const mergedConfig = {
                  ...parentConfig,
                  ...versionConfig,
                };
                await generateApiDocs(mergedConfig);
              });
            }
          } else if (!versions[versionId]) {
            console.error(
              chalk.red(
                `Version ID '${versionId}' does not exist in OpenRPC docs versions config.`
              )
            );
          } else {
            const versionConfig = versions[versionId];
            const mergedConfig = {
              ...parentConfig,
              ...versionConfig,
            };
            await generateVersions(mergedVersions, parentConfig.outputDir);
            await generateApiDocs(mergedConfig);
          }
        });

      cli
        .command(`clean-api-docs`)
        .description(
          `Clears the generated OpenRPC docs MDX files and sidebar.js (if enabled).`
        )
        .usage("<id>")
        .arguments("<id>")
        .action(async (id) => {
          if (id === "all") {
            if (config[id]) {
              console.error(
                chalk.red(
                  "Can't use id 'all' for OpenRPC docs configuration key."
                )
              );
            } else {
              Object.keys(config).forEach(async function (key) {
                await cleanApiDocs(config[key]);
              });
            }
          } else {
            await cleanApiDocs(config[id]);
          }
        });

      cli
        .command(`clean-api-docs:version`)
        .description(
          `Clears the versioned, generated OpenRPC docs MDX files, versions.json and sidebar.js (if enabled).`
        )
        .usage("<id:version>")
        .arguments("<id:version>")
        .action(async (id) => {
          const [parentId, versionId] = id.split(":");
          const { versions } = config[parentId] as any;

          const parentConfig = Object.assign({}, config[parentId]);
          delete parentConfig.versions;

          if (versionId === "all") {
            if (versions[id]) {
              chalk.red(
                "Can't use id 'all' for OpenRPC docs versions configuration key."
              );
            } else {
              await cleanVersions(parentConfig.outputDir);
              Object.keys(versions).forEach(async (key) => {
                const versionConfig = versions[key];
                const mergedConfig = {
                  ...parentConfig,
                  ...versionConfig,
                };
                await cleanApiDocs(mergedConfig);
              });
            }
          } else {
            const versionConfig = versions[versionId];
            const mergedConfig = {
              ...parentConfig,
              ...versionConfig,
            };
            await cleanApiDocs(mergedConfig);
          }
        });
    },
  };
}

pluginOpenRPCDocs.validateOptions = ({ options, validate }: any) => {
  const validatedOptions = validate(OptionsSchema, options);
  return validatedOptions;
};
