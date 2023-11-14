import fs from "fs";
import { dereferenceDocument } from '@open-rpc/schema-utils-js';

console.log('Loading files...\n')

let methods = []
let methodsBase = "openrpc/soroban-rpc/methods/"
let methodFiles = fs.readdirSync(methodsBase)

methodFiles.forEach(file => {
    console.log('reading file:', file)
    let raw = fs.readFileSync(methodsBase + file)
    let fileContents = JSON.parse(raw)
    methods = [
        ...methods,
        fileContents.methods[0],
    ]
})
// console.log('here are the methods now', methods)

let schemas = {}
let schemasBase = "openrpc/soroban-rpc/components/schemas/"
let schemasFiles = fs.readdirSync(schemasBase)

schemasFiles.forEach(file => {
    console.log('reading file:', file)
    let raw = fs.readFileSync(schemasBase + file)
    let fileContents = JSON.parse(raw)
    schemas = {
        ...schemas,
        ...fileContents.components.schemas
    }
})
// console.log('here are the schemas now', schemas)

let doc = {
    openrpc: "1.2.4",
    info: {
        version: "0.9.4",
        title: "Soroban RPC",
        description: "A public discussion about the design of soroban-rpc."
    },
    servers: [
        {
            url: "https://rpc-futurenet.stellar.org:443",
            description: "Publicly available RPC server maintained by SDF, operating on the futurenet test network."
        }
    ],
    methods: methods,
    components: {
        schemas: schemas
    }
}

fs.writeFileSync('openrpc/restart/refs-openrpc.json', JSON.stringify(doc, null, 4))

let spec = await dereferenceDocument(doc)
spec.components = {}

fs.writeFileSync('openrpc/restart/test-openrpc.json', JSON.stringify(spec, null, 4))
