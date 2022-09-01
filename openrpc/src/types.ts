// export type {
//   PropSidebarItemCategory,
//   SidebarItemLink,
//   PropSidebar,
//   PropSidebarItem,
// } from "@docusaurus/plugin-content-docs-types";
import * as metaschema from "@open-rpc/meta-schema";

export interface PluginOptions {
  id?: string;
  docsPluginId: string;
  config: {
    [key: string]: APIOptions;
  };
}

export interface APIOptions {
  specPath: string;
  outputDir: string;
  template?: string;
  sidebarOptions?: SidebarOptions;
  version?: string;
  label?: string;
  baseUrl?: string;
  versions?: {
    [key: string]: APIVersionOptions;
  };
}

export interface SidebarOptions {
  groupPathsBy?: string;
  categoryLinkSource?: string;
  customProps?: { [key: string]: unknown };
  sidebarCollapsible?: boolean;
  sidebarCollapsed?: boolean;
}

export interface APIVersionOptions {
  specPath: string;
  outputDir: string;
  label: string;
  baseUrl: string;
}

export interface LoadedContent {
  loadedApi: ApiMetadata[];
  // loadedDocs: DocPageMetadata[]; TODO: cleanup
}

export type ApiMetadata = MethodPageMetadata | InfoPageMetadata | TagPageMetadata;

export interface ApiMetadataBase {
  sidebar?: string;
  previous?: ApiNavLink;
  next?: ApiNavLink;
  //
  id: string; // TODO legacy versioned id => try to remove
  unversionedId: string; // TODO new unversioned id => try to rename to "id"
  infoId?: string;
  infoPath?: string;
  title: string;
  description: string;
  source: string; // @site aliased source => "@site/docs/folder/subFolder/subSubFolder/myDoc.md"
  sourceDirName: string; // relative to the versioned docs folder (can be ".") => "folder/subFolder/subSubFolder"
  slug?: string;
  permalink: string;
  sidebarPosition?: number;
  frontMatter: Record<string, unknown>;
  markdown?: string;
}

export interface MethodPageMetadata extends ApiMetadataBase {
  json?: string;
  type: "method";
  method: MethodObject;
}

export interface InfoPageMetadata extends ApiMetadataBase {
  type: "info";
  info: InfoObject;
}

export interface TagPageMetadata extends ApiMetadataBase {
  type: "tag";
  tag: TagObject;
}

export interface ApiNavLink {
  title: string;
  permalink: string;
}

export interface TagObject extends metaschema.TagObject {
  "x-displayName"?: string;
}

export interface InfoObject extends metaschema.InfoObject{
  tags?: TagObject[];
  "x-logo"?: LogoObject;
  "x-dark-logo"?: LogoObject;
  logo?: LogoObject;
  darkLogo?: LogoObject;
}

export interface LogoObject {
  url?: string;
}

export interface MethodObject extends metaschema.MethodObject {
  // extensions
  "x-deprecated-description"?: string;
}
