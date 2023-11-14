import Method from "@metamask/open-rpc-docs-react";
import React from "react";

const CodeBlock = require('@theme/CodeBlock').default;

export const RpcMethod = (param: { method:string; }) => {
    const rpcMethod = require(`@site/static/rpc-methods/${param.method}.json`);
    const wholeThing = require('@site/openrpc/restart/derefed-openrpc.json');
    console.log(wholeThing)
    return (<Method method={wholeThing.methods[0]} components={{CodeBlock}}/>);
};
