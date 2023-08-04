const {
    OpenrpcDocument,
    MethodObject,
    ExampleObject,
    ExamplePairingObject,
    ContentDescriptorObject,
    JSONSchemaObject,
} = require('@open-rpc/meta-schema')

const {
    parseOpenRPCDocument,
    validateOpenRPCDocument,
} = require('@open-rpc/schema-utils-js')

const fs = require('fs')
const data = require('./soroban-rpc/openrpc.json')

const renderFrontMatter = (openrpcMethod, position) => {
    let markdown = ''
    markdown = '---\n'
    markdown += `title: ${openrpcMethod.name}\n`
    markdown += `description: ${openrpcMethod.summary ?? ''}\n`
    markdown += `sidebar_position: ${position}\n`
    markdown += '---\n\n'
    return markdown
}

const renderMethodDescription = (openrpcMethod) => {
    let markdown = ''
    markdown += `# ${openrpcMethod.name}\n\n`
    markdown += `${openrpcMethod.description ?? openrpcMethod.summary ?? ''}\n\n`
    return markdown
}

const renderMethodParams = (openrpcParams) => {
    let markdown = ''
    markdown += `## Params <small>(${openrpcParams.length})</small>\n\n`

    if (openrpcParams.length) {
        for (let j in openrpcParams) {
            let param = openrpcParams[j]
            markdown += `### ${parseInt(j) + 1}. ${param.name}${param.required ? ' <i><small>(required)</small></i>' : ''}\n\n`
            markdown += `${param.description}\n\n`
        }
    }

    return markdown
}

const renderMethodResult = (openrpcResult) => {
    let markdown = ''
    markdown += `## Result <i><small>(${openrpcResult.name})</small></i>\n\n`




}

if (validateOpenRPCDocument(data)) {
    parseOpenRPCDocument(data)
        .then((parsed) => {
            for (let i in parsed.methods) {
                let method = parsed.methods[i]
                let markdown = ''
                markdown += renderFrontMatter(method, i)
                markdown += renderMethodDescription(method)
                markdown += renderMethodParams(method.params)



                fs.writeFile(`../rpc/methods/${method.name}.mdx`, markdown, err => {
                    if (err) {
                        console.error(err)
                    }
                })
            }
            // let renderedMarkdown = openRPCToMarkdown(parsed)
            // // console.log(renderedMarkdown)
        })
}

// let renderedMarkdown = openRPCToMarkdown(parsedDoc)
// console.log('renderedMarkdown', renderedMarkdown)

