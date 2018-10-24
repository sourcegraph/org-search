# Search extension

Adds search custom operators

## Prerequisites

Sourcegraph extensions are written in TypeScript are distributed as bundled JavaScript files that run on the client. For creation, publishing, and viewing, you need:

- **Creation**: Install [Node.js](https://nodejs.org) and [npm](https://npmjs.com)
- **Publishing**: Install the [Sourcegraph CLI (`src`)](https://github.com/sourcegraph/src-cli#installation) and create a [Sourcegraph.com account](https://sourcegraph.com/sign-up)
- **Viewing**: Install Sourcegraph extension for [Chrome](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/).

## Setup
```
npm install
```

## Check check and lint
```
npm run tslint
npm run typecheck
```

## Publish
```
src extensions publish
```
