import Method from "@metamask/open-rpc-docs-react";
import React from "react";

const CodeBlock = require('@theme/CodeBlock').default;

export const RpcMethod = (param: { method:string; }) => {
    const rpcMethod = require(`@site/static/rpc-methods/${param.method}.json`);
    return (<Method method={rpcMethod} components={{CodeBlock}}/>);
};