import fs from "fs";
import * as openrpc from "@open-rpc/schema-utils-js";
import YAML from "yaml";

async function run() {
  let buf = fs.readFileSync("./soroban-rpc/openrpc.yaml");
  let parsed = await openrpc.parseOpenRPCDocument(YAML.parse(buf.toString()));
  console.log(JSON.stringify(parsed));
}

run()
