# [Deprecated] Soroban Documentation and API Reference <!-- omit in toc -->


Soroban Documentation has been consolidated into Stellar Developer
Documentations.

To read the Stellar Developer Docs: https://developers.stellar.org/
To contribute or open issues in the Stellar Developer Docs: https://github.com/stellar/stellar-docs


Please do not open issues in this repo as it is no longer actively maintained. 

----


Welcome to the official home repository for [Documentation] and [API Reference] for the [Soroban] smart contracts platform.

## Table of Contents <!-- omit in toc -->

- [Contributing](#contributing)
- [Quick Start](#quick-start)
- [Repository Structure](#repository-structure)
- [Markdown Basics](#markdown-basics)

## Contributing

Contributions are more than welcome! Thank you! 🎉

Before diving in, please read our [Stellar Contribution Guide] for details on
contributing to Stellar's various repositories. Please take special note of the
[code of conduct].

Our documentation site is built using [Docusaurus]. The content is written in
[MDX], which adds a lot of cool possibilities. Even if you're unfamiliar with
plain markdown, do not fear! You can still contribute in a helpful and
meaningful way. markdown is super easy to learn, and will come quite naturally
after only a bit of practice. You can always help fix typos, spelling, and
broken links, too.

## Quick Start

To begin development on the documentation, you will first need [yarn] installed
on your system. Once it is, you can run the following commands:

```bash
git clone https://github.com/stellar/soroban-docs
cd soroban-docs
yarn install
yarn start
```

This will begin the development server, and open a browser window/tab pointing
to `http://localhost:3000/docs/`. This development server will auto-reload when
it detects changes to the repository.

After you've made your changes, please use `prettier` to ensure consistent
formatting throughout the repository:

```bash
yarn check:mdx # this will search for problems in the MDX files
yarn format:mdx # this will fix any problems that were found
```

## Repository Structure

- `/docs/` Contains all the documentation content. If you're contributing to the
  actual documentation, rather than site functionality, this is likely where you
  will want to be.
  - `/docs/<subdirectory>/` Each subdirectory inside the `docs` directory
    contains content documents relating to a common idea (tutorials, or
    technical reference for example). There can also be subdirectories nested
    even further, which will follow the same rules. The location of a document
    within this directory structure will have a direct impact on the URL given
    to the document on the site (unless there is metadata or front matter that
    overrides these defaults.)
  - `/docs/<subdirectory>/_category_.json` This file contains information that
    determines the directory's location and position within the site's sidebar.
  - `/docs/<subdirectory>/<filename>.mdx` The actual documents live in these
    files (written in markdown), and also contains "front matter" which can
    specify configuration parameter for the document's display, URL, etc. **All
    filenames must use dashes for spaces instead of spaces or underscores**
- `/api/` Contains the pages documenting the methods available through the
  [Soroban RPC] service. The top-level files here are pretty bog-standard
  markdown files. However, the documentation for each of the available methods
  is generated from an [OpenRPC specification] file. **This file should not be
  edited by hand! It's generated from a subset of schema documents. If you find
  a problem with the specification document, please [create an issue] and we can
  take care of it as quickly as we can.**
- `/dapps/` Contains the pages for the [Dapps Challenge] set of exercises and
  tutorials, as well as other information on tools and techniques for building
  Dapps using Soroban. Many of these pages rely on several custom React
  components.
- `/src/` Contains non-documentation files like custom React components and
  styling.
- `/static/` Contains static assets. Anything in this directory will be copied
  to the root of the final `build` directory.
- `/nginx/` Contains configuration used to deploy and host the docs site. Unless
  you're part of Stellar's IT Ops team, you probably don't need to do anything
  with this. *Exception*:
  - `/nginx/includes/redirects.conf` Contains redirect rules to avoid broken
    links. If you find a broken link somewhere out in the wilds of the internet,
    and there's no way for it to be changed, a redirect could be a useful tool.
    (Note our aim isn't to *completely* avoid 404 pages for a user. That would
    be impossible and impractical. These redirects are evaluated on a
    case-by-case basis, and it may be determined that a redirect isn't the right
    approach in some instances.)

## Markdown Basics

If you're unfamiliar with markdown, there are **loads** of good tutorials and
cheat sheets out there. Check out some of these resources to get a handle on the
basics:

- [CommonMark cheat sheet and tutorial]
- [Interactive markdown tutorial]
- [The markdown guide]

[Documentation]: https://soroban.stellar.org/docs
[API Reference]: https://soroban.stellar.org/api
[Soroban]: https://soroban.stellar.org
[Stellar Contribution Guide]: https://github.com/stellar/.github/blob/master/CONTRIBUTING.md
[code of conduct]: https://github.com/stellar/.github/blob/master/CODE_OF_CONDUCT.md
[Docusaurus]: https://docusaurus.io
[MDX]: https://mdxjs.com
[yarn]: https://yarnpkg.com/
[Soroban RPC]: https://github.com/stellar.org/soroban-rpc/cmd/soroban-rpc
[OpenRPC specification]: https://github.com/stellar/soroban-docs/blob/main/static/openrpc.json
[create an issue]: https://github.com/stellar/soroban-docs/issues
[Dapps Challenge]: https://soroban.stellar.org/dapps
[CommonMark cheat sheet and tutorial]: https://commonmark.org/help/
[Interactive markdown tutorial]: https://www.markdowntutorial.com/
[The markdown guide]: https://www.markdownguide.org/
