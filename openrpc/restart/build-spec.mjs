import Ajv from 'ajv'
import * as fs from 'fs/promises'

import pkg from '@open-rpc/meta-schema';
const { OpenRPC } = pkg;

/** @param {string} uri */
const load = async (uri) => {
    return JSON.parse(await fs.readFile(uri, 'utf8'))
}

// import { dereferenceSync } from 'dereference-json-schema'
import pkg3 from 'dereference-json-schema';
const { dereferenceSync } = pkg3;

// import fs from "fs";
// import { dereferenceDocument, validateOpenRPCDocument, readSchemaFromFile } from "@open-rpc/schema-utils-js";
import { createRequire } from 'module';
import pkg2 from '@open-rpc/schema-utils-js';
const { dereferenceDocument, validateOpenRPCDocument } = pkg2;

const require = createRequire(import.meta.url)
const spec = require('./openrpc.json')
// console.log('openrpc.json:', spec)

// dereferenceDocument(spec).then((deref) =>
//     console.log('deref:', deref)
// ).catch((err) => console.error('error!', JSON.stringify(err, "", 2)))
// const $RefParser = require('@apidevtools/json-schema-ref-parser')

// $RefParser.dereference(spec, (err, schema) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         // console.log("YES!")
//         const valid = validateOpenRPCDocument(schema)
//         if (valid !== true) {
//             console.log('errors!', JSON.stringify(valid !== true, "", 2))
//         }
//         console.log(schema.methods[0].params[0].schema)

//     }
// })

const schemaWithNoRefs = dereferenceSync(spec)
console.log(JSON.stringify(schemaWithNoRefs, "", 2))
// const mySchema = await readSchemaFromFile('./openrpc.json')
// console.log('mySchema:', mySchema)

// const ajv = new Ajv()

// ajv.addSchema(await load('openrpc/restart/openrpc.json'))
// ajv.addSchema(await load('openrpc/restart/components/contentDescriptors/latestLedger.json'))
// ajv.addSchema(await load('openrpc/restart/components/schemas/latestLedger.json'))
// const validate = ajv.getSchema('openrpc.json')
// console.log(validate)
