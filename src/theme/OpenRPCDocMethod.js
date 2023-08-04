"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DocSidebar = require("@theme/DocSidebar").default;
const Layout_1 = __importDefault(require("@theme/Layout"));
const { useDocRouteMetadata } = require('@docusaurus/theme-common/internal');
const open_rpc_docs_react_1 = require("@metamask/open-rpc-docs-react");
const path_1 = require("path");
require("./OpenRPCDocMethod.css");
const CodeBlock = require('@theme/CodeBlock').default;
const getExamplesFromMethod = (method) => {
    if (!method) {
        return [];
    }
    if (!method.params) {
        return [];
    }
    const examples = [];
    method.params.forEach((param, index) => {
        if (param.schema && param.schema.examples && param.schema.examples.length > 0) {
            param.schema.examples.forEach((ex, i) => {
                const example = examples[i];
                if (example === undefined) {
                    examples.push({
                        name: "generated-example",
                        params: [
                            {
                                name: param.name,
                                value: ex,
                            },
                        ],
                        result: {
                            name: "example-result",
                            value: null,
                        },
                    });
                }
                else {
                    example.params.push({
                        name: param.name,
                        value: ex,
                    });
                }
            });
        }
    });
    const methodResult = method.result;
    if (methodResult && methodResult.schema && methodResult.schema.examples && methodResult.schema.examples.length > 0) {
        methodResult.schema.examples.forEach((ex, i) => {
            const example = examples[i];
            if (example === undefined) {
                examples.push({
                    name: "generated-example",
                    params: [],
                    result: {
                        name: methodResult.name,
                        value: ex,
                    },
                });
            }
            else {
                example.result = {
                    name: methodResult.name,
                    value: ex,
                };
            }
        });
    }
    return examples;
};
function OpenRPCDocMethod(props) {
    const { versionMetadata } = props;
    let sidebarMethods = props.propsFile.openrpcDocument.methods.map((method) => {
        return {
            type: "link",
            label: method.name,
            href: (0, path_1.join)(props.propsFile.path, method.name),
        };
    });
    let sidebar = [
        {
            type: 'category',
            label: 'Introduction',
            collapsible: true,
            collapsed: false,
            link: {
              type: 'generated-index',
              title: 'Introduction',
              description: 'A public discussion about the design of Soroban RPC',
              slug: '/',
            },
            items: [
                {
                    type: "link",
                    label: "Goals",
                    href: "/rpc/goals"
                },
                {
                    type: "link",
                    label: "Anti-Goals",
                    href: "/rpc/anti-goals"
                },
                {
                    type: "link",
                    label: "JSON-RPC",
                    href: "/rpc/json-rpc"
                },
                {
                    type: "link",
                    label: "Pagination",
                    href: "/rpc/pagination"
                },
            ],
        },
        {
            type: 'category',
            label: 'RPC Methods',
            collapsible: true,
            collapsed: false,
            link: {
                type: 'generated-index',
                title: 'RPC Methods',
                slug: 'methods'
            },
            items: [
                ...sidebarMethods
            ]
        }
    ];
    if (versionMetadata) {
        sidebar = Object.values(versionMetadata.docsSidebars)[0];
    }
    const method = props.propsFile.openrpcDocument.methods.find((m) => {
        const parts = props.route.path.split("/");
        let name = parts[parts.length - 1];
        // deal with trailingSlash: true
        if (name === "") {
            name = parts[parts.length - 2];
        }
        return m.name.toLowerCase() === name.toLowerCase();
    });
    method.examples = method.examples || getExamplesFromMethod(method);
    const [selectedExamplePairing, setSelectedExamplePairing] = react_1.default.useState(method.examples[0]);
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement("div", { style: { display: "flex", width: "100%", flex: "1 0", }, className: "docusaurus-openrpc" },
            react_1.default.createElement("aside", { style: {
                    display: "block",
                    width: "var(--doc-sidebar-width)",
                    marginTop: "calc(-1 * var(--ifm-navbar-height))",
                    borderRight: "1px solid var(--ifm-toc-border-color)",
                    willChange: "width",
                    transition: "width var(--ifm-transition-fast) ease",
                    clipPath: "inset(0)",
                }, className: "theme-doc-sidebar-container" },
                react_1.default.createElement("div", { style: {
                        top: 0,
                        position: "sticky",
                        height: "100%",
                        maxHeight: "100vh",
                    } },
                    react_1.default.createElement(DocSidebar, { path: props.route.path, sidebar: sidebar }))),
            react_1.default.createElement("main", { className: "docMainContainer", style: { width: "100%" } },
                react_1.default.createElement("div", { className: "container padding-top--md padding-bottom--lg" },
                    react_1.default.createElement("div", { className: "row" },
                        react_1.default.createElement("div", { className: "col" },
                            !method &&
                                react_1.default.createElement("div", null, "Index"),
                            method && react_1.default.createElement(open_rpc_docs_react_1.Method, { method: method, components: { CodeBlock }, onExamplePairingChange: (examplePairing) => setSelectedExamplePairing(examplePairing) })),
                            ))))));
}
exports.default = OpenRPCDocMethod;
//# sourceMappingURL=OpenRPCDocMethod.js.map
