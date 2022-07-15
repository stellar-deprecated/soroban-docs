import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import { text } from "mdast-util-to-markdown/lib/handle/text.js";
import { link } from "mdast-util-to-markdown/lib/handle/link.js";
import migrate from "./codemod/migrate_v1.mjs";

const remarkConfig = {
  settings: {
    bullet: "-",
    emphasis: "_",
    listItemIndent: "one",
    incrementListMarker: false,
    fences: true,
    tightDefinitions: true,
    unsafe: [
      { character: ">", before: "<", inConstruct: "phrasing" },
      { character: "<", after: "[a-zA-Z0-9]", inConstruct: "phrasing" },
    ],
    handlers: {
      text(node, _, context, safeOptions) {
        let safe = text(node, _, context, safeOptions);

        safe = safe.replace(/\\_/g, "_");
        safe = safe.replace(/\\\[/g, "[");
        safe = safe.replace(/\\&/g, "&");

        return safe;
      },
      link(node, _, context, safeOptions) {
        let safe = link(node, _, context, safeOptions);

        safe = safe.replace(/\\&/g, "&");

        return safe;
      },
    },
  },
  plugins: [remarkMdx, remarkFrontmatter, migrate],
};

export default remarkConfig;
