import fs from "fs";

import {
  MethodPageMetadata,
  InfoPageMetadata,
  TagPageMetadata,
  // ContactObject,
  // LicenseObject,
  // MediaTypeObject,
} from "../types";
// import { createAuthentication } from "./createAuthentication";
// import { createContactInfo } from "./createContactInfo";
// import { createDeprecationNotice } from "./createDeprecationNotice";
// import { createDescription } from "./createDescription";
// import { createLicense } from "./createLicense";
// import { createLogo } from "./createLogo";
// import { createParamsDetails } from "./createParamsDetails";
// import { createRequestBodyDetails } from "./createRequestBodyDetails";
// import { createStatusCodes } from "./createStatusCodes";
// import { createTermsOfService } from "./createTermsOfService";
// import { createVersionBadge } from "./createVersionBadge";
import { render } from "mustache";
import { stringify } from "./utils";

// interface Props {
//   title: string;
//   body: {
//     content?: {
//       [key: string]: MediaTypeObject;
//     };
//     description?: string;
//     required?: boolean;
//   };
// }

const defaultMethodPageTemplate = `---
id: {{{id}}}
sidebar_label: {{{method.name}}}
hide_table_of_contents: true
sidebar_class_name: "{{{method.name}}} api-method"
hide_title: true
{{#json}}
json: {{{json}}}
{{/json}}
{{#infoPath}}
info_path: {{{infoPath}}}
{{/infoPath}}
---

import ApiTabs from "@theme/ApiTabs";
import MimeTabs from "@theme/MimeTabs";
import ParamsItem from "@theme/ParamsItem";
import ResponseSamples from "@theme/ResponseSamples";
import SchemaItem from "@theme/SchemaItem"
import SchemaTabs from "@theme/SchemaTabs";
import DiscriminatorTabs from "@theme/DiscriminatorTabs";
import TabItem from "@theme/TabItem";

## {{method.name}}

{{#method.deprecated}}
This method has been deprecated and may be removed in future versions of the API.
{{/method.deprecated}}

{{description}}{{^description}}{{method.summary}}{{/description}}

### Params

{{#params}}
<ParamsItem param={{{.}}} />
{{/params}}
{{^params}}
No params
{{/params}}

### Result

{{#result}}
{{{.}}}
{{/result}}
{{^result}}
No result
{{/result}}

### Errors

{{#method.errors}}
{{code}}
{{message}}
{{/method.errors}}
  
### Examples

{{#examples}}
#### {{name}}

{{description}}{{^description}}{{summary}}{{/description}}

##### Params

<ResponseSamples responseExample="{{params}}" />

##### Result

<ResponseSamples responseExample="{{result}}" />

{{/examples}}
`;

export function createMethodPageMD({
    description,
    id,
    infoId,
    method,
    title,
  }: MethodPageMetadata,
  docRouteBasePath: string,
  docPath: string,
  outputDir: string,
  templateFile?: string
) {
  // const {
  //   deprecated,
  //   "x-deprecated-description": deprecatedDescription,
  //   description,
  //   parameters,
  //   requestBody,
  //   responses,
  // } = method;

  const template = templateFile ? fs.readFileSync(templateFile).toString() : defaultMethodPageTemplate;

  const json = JSON.stringify(method);
  let infoBasePath = `${outputDir}/${infoId}`;
  if (docRouteBasePath) {
    infoBasePath = `${docRouteBasePath}/${outputDir
      .split(docPath!)[1]
      .replace(/^\/+/g, "")}/${infoId}`.replace(/^\/+/g, "");
  }
  const infoPath = infoId && infoBasePath;

  return render(template, {
    description,
    id,
    infoPath,
    json,
    method,
    params: method.params.map(p => "{"+JSON.stringify(p)+"}"),
    examples: method.examples?.map(e => 'name' in e && ({
      name: e.name,
      description: e.description,
      params: JSON.stringify(e.params.map(p => 'value' in p && p.value), null, 2),
      result: 'value' in e.result && JSON.stringify(e.result.value, null, 2),
    })).filter(e => !!e),
    result: JSON.stringify(JSON.stringify(method.result, null, 2)),
    stringify,
    title,
  });
}

const defaultInfoPageTemplate = `---
id: {{{id}}}
sidebar_label: {{{title}}}
hide_title: true
---

import ApiLogo from "@theme/ApiLogo";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<!-- createVersionBadge(version) -->
# {{title}}

<!--
createLogo(logo, darkLogo)
createDescription(description)
createAuthentication(securitySchemes as unknown as SecuritySchemeObject)
createContactInfo(contact as ContactObject)
createTermsOfService(termsOfService)
createLicense(license as LicenseObject)
-->

\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
\`\`\`
`;

export function createInfoPageMD({
  info: {
    id,
    title,
    version,
    description,
    contact,
    license,
    termsOfService,
    logo,
    darkLogo,
  },
}: InfoPageMetadata, templateFile?: string) {
  const template = templateFile ? fs.readFileSync(templateFile).toString() : defaultInfoPageTemplate;
  return render(template, {
    id,
    title,
  });
}

const defaultTagPageTemplate = `---
id: {{{id}}}
title: {{{description}}}
description: {{{description}}}
---

<!--
createDescription(description)
-->

\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
\`\`\`
`;


export function createTagPageMD({ tag: { id, description } }: TagPageMetadata, templateFile?: string) {
  const template = templateFile ? fs.readFileSync(templateFile).toString() : defaultTagPageTemplate;
  return render(template, {
    id,
    description,
  });
}
