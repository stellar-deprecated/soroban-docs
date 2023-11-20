import Method from "@metamask/open-rpc-docs-react";
import React from "react";

const CodeBlock = require('@theme/CodeBlock').default;
const Tabs = require('@theme/Tabs').default;
const TabItem = require('@theme/TabItem').default;

export const RpcMethod = (param: { method:string; }) => {
    const rpcDoc = require('@site/static/openrpc.json')
    const rpcMethod = rpcDoc.methods.filter((meth: any) => meth.name === param.method )[0]

    return (
        <Method method={rpcMethod} components={{CodeBlock, Tabs, TabItem}} />
    );
};
