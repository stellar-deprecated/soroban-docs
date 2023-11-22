const fs = require('fs')
const path = require('path')

module.exports = async ({ defaultSidebarItemsGenerator, ...args }) => {

    if (args.version.contentPath.endsWith('docs')) {
        /**
         * Adds a custom class name to the "Tutorials" index page, which we then
         * use in the `/src/css/custom.scss` file to hide the `<ul>` element
         * that is contained within the item. The result is a single "Tutorials"
         * page that contains the list of all the docs underneath it, while
         * those items are not displayed in the sidebar.
         */
        args.docs.map((doc) => {
            if (doc.id === 'tutorials/index') {
                doc.frontMatter.sidebar_class_name = "sidebar-category-items-hidden"
            }
        })
    } else if (args.version.contentPath.endsWith('guides')) {
        args.docs.map((doc) =>
            doc.frontMatter.hide_table_of_contents = true
        )
    }

    // const docs = args.docs.filter((doc) => !doc.id.startsWith('tutorials'))
    // const docs = args.docs
    // if (args.version.contentPath.endsWith('guides')) {
    //     args.docs.map((doc) => console.log(doc.frontMatter))
    // }
    const sidebarItems = await defaultSidebarItemsGenerator({ ...args })
    // console.log('sidebarItems', sidebarItems)
    // sidebarItems.map((item) => {
    //     if (item.id && item.id.startsWith('tutorials')) {
    //         item.className = 'sidebar-item-hidden'
    //     }
    // })
    return sidebarItems
}
