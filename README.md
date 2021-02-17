# A PoC that demonstrates building a reusable React component library

(it's also a clock)

Based on:
[Build a React Component Library and Publish to the GitHub Package Registry](https://medium.com/better-programming/build-your-very-own-react-component-library-and-publish-it-to-github-package-registry-192a688a51fd)


1. Set up project:
`npm init -y`
`npm i -D @types/react @types/react-dom @types/styled-components typescript`
`npm i -g typescript` (if not already installed)
`tsc --init`
`git init`

2. configure tsconfig.json (see commit)

3. Add component directories and clock code (see commit)

4. build with rollup.js
`npm i -D rollup rollup-plugin-delete rollup-plugin-typescript2`

5. setup a playground to test component
`npx create-react-app playground --typescript`
`cd playground && npm i styled-components` (in playground app)
`npm i -D npm-run-all` (in component project)

then add new scripts to component package.json (see commit)

`npm run dev` (will build and copy component plus start CRA playground)