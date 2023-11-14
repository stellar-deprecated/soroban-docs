import Ajv from 'ajv'
import * as fs from 'fs/promises'

import pkg from '@open-rpc/meta-schema';
const { OpenRPC } = pkg;

/** @param {string} uri */
const load = async (uri) => {
    return JSON.parse(await fs.readFile(uri, 'utf8'))
}

// import fs from "fs";
// import { dereferenceDocument, validateOpenRPCDocument, readSchemaFromFile } from "@open-rpc/schema-utils-js";
import { createRequire } from 'module';
import pkg2 from '@open-rpc/schema-utils-js';
const { dereferenceDocument, validateOpenRPCDocument } = pkg2;

// const require = createRequire(import.meta.url)
// const spec = require('./openrpc.json')
// console.log('openrpc.json:', spec)

// dereferenceDocument(spec).then((deref) =>
//     console.log('deref:', deref)
// ).catch((err) => console.error('error!', JSON.stringify(err, "", 2)))

// const errors = validateOpenRPCDocument(spec)
// if (errors) {
//     console.log('errors!', JSON.stringify(errors, "", 2))
// }

// const mySchema = await readSchemaFromFile('./openrpc.json')
// console.log('mySchema:', mySchema)

const ajv = new Ajv()

ajv.addSchema(await load('openrpc/restart/openrpc.json'))
ajv.addSchema(await load('openrpc/restart/components/contentDescriptors/latestLedger.json'))
ajv.addSchema(await load('openrpc/restart/components/schemas/latestLedger.json'))
const validate = ajv.getSchema('openrpc.json')
console.log(validate)
