const fs = require('fs')
const path = require('path')

module.exports = async ({ defaultSidebarItemsGenerator, ...args }) => {
    args.docs.map((doc) => {
        if (doc.id === 'tutorials/index') {
            doc.frontMatter.sidebar_class_name = "sidebar-category-items-hidden"
        }
        // if (doc.id.startsWith('tutorials')) {
            // if (doc.id === 'tutorials/alloc') {
            //     console.log(doc)
            // }
        // }
    })

    // const docs = args.docs.filter((doc) => !doc.id.startsWith('tutorials'))
    // const docs = args.docs
    const sidebarItems = await defaultSidebarItemsGenerator({ ...args })
    // console.log('sidebarItems', sidebarItems)
    // sidebarItems.map((item) => {
    //     if (item.id && item.id.startsWith('tutorials')) {
    //         item.className = 'sidebar-item-hidden'
    //     }
    // })
    return sidebarItems
}
