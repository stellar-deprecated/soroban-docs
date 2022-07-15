import visit from "unist-util-visit";

const migrate = () => {
  const transform = (tree) => {
    visit(tree, "text", rewriteImports);
    visit(tree, "html", rewriteReadMore);
    visit(tree, "image", rewriteWebAssets);
  };

  return transform;
};

const rewriteImports = (node) => {
  if (node.value.startsWith("import")) {
    node.value = node.value.replace(/(?<='|").*(?=components)/g, "@site/src/");
  }
};

const rewriteReadMore = (node) => {
  if (node.value.startsWith("<ReadMore")) {
    node.value = node.value.replace(/(?<=url=".*)\/index(?=")/, "");
  }
};

const rewriteWebAssets = (node) => {
  node.url = node.url.replace(/^\W*(?=web-assets)/, "/");
};

const rewriteReferenceLinks = (node) => {
  if (node.url.includes("/api")) {
    node.url = node.url.replace(/^\W*/, "/");
  }
};

export default migrate;
