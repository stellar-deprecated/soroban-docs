import React from "react";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function ExampleRequest(props) {
  let requestObject = {
    jsonrpc: "2.0",
    id: 8675309,
    method: props.method,
  }

  if (props.params) {
    requestObject.params = { ...props.params }
  }

  return (
    <Tabs
      defaultValue={"curl"}
      values={[
        { label: "Curl", value: "curl" },
        { label: "JavaScript", value: "js" },
        { label: "Python", value: "py" },
        { label: "JSON", value: "json"},
      ]}
    >
      <TabItem value="curl">
        <CodeBlock language="bash">
{`curl -X POST \\
-H 'Content-Type: application/json' \\
-d '${JSON.stringify(requestObject, null, 2)}' \\
https://rpc-futurenet.stellar.org | jq`}
        </CodeBlock>
      </TabItem>

      <TabItem value="js">
        <CodeBlock language="js">
{`let requestObject = ${JSON.stringify(requestObject, null, 2)}
let res = await fetch('https://rpc-futurenet.stellar.org', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(requestObject),
)
let json = await res.json()
console.log(json)`}
        </CodeBlock>
      </TabItem>

      <TabItem value="py">
        <CodeBlock language="python">
{`import json, requests
res = requests.post('https://rpc-futurenet.stellar.org', json=${JSON.stringify(requestObject, null, 4)})
print(json.dumps(res.json(), indent=2))`}
        </CodeBlock>
      </TabItem>

      <TabItem value="json">
        <CodeBlock language="json">
{JSON.stringify(requestObject, null, 2)}
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}
