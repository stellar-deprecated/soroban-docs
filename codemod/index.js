import fs from 'fs';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import remarkFrontmatter from 'remark-frontmatter';

const processor = remark().use(remarkMdx).use(remarkFrontmatter);

const filePath = 'docs/index.mdx';

const tree = processor.parse(fs.readFileSync(filePath));

for (const child of tree.children) {
  const isImport = child.type === 'mdxjsEsm';
  const isReadMore =
    child.type === 'mdxJsxFlowElement' && child.name === 'ReadMore';

  if (isImport && !child.value.includes('@site/src/')) {
    child.value = child.value.replace(/(?<='|")\W*/, '@site/src/');
  }

  if (isReadMore) {
    const urlAttr = child.attributes.find((attr) => attr.name === 'url');
    urlAttr.value = urlAttr.value.replace(/\/index$/, '');
  }
}

const content = processor.stringify(tree);

fs.writeFileSync(filePath, content);

// const migratedMarkdown = processor.stringify({type:'root', children: })
