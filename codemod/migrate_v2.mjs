import visit from "unist-util-visit";

const migrate = () => {
  const transform = (tree) => {
    visit(tree, "mdxjsEsm", rewriteImports);
    visit(tree, "mdxJsxFlowElement", rewriteReadMore);
    visit(tree, "image", rewriteWebAssets);
  };

  return transform;
};

const rewriteImports = (node) => {
  node.value = node.value.replace(/(?<='|").*(?=components)/g, "@site/src/");
};

const rewriteReadMore = (node) => {
  if (node.name === "ReadMore") {
    const urlAttr = node.attributes.find((attr) => attr.name === "url");
    urlAttr.value = urlAttr.value.replace(/\/index$/, "");
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
