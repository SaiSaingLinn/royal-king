## Features
+ Starting local server
+ SASS/SCSS preprocessors
+ Pug templating
+ JS transpilation
+ TypesScript support
+ File minification
+ Some predefined UI components
+ and more...

## Commands
Run this commands using `npm run ${command}` or `yarn ${command}`
+ `start` – starts local dev server on development mode
+ `build` – creates production build
+ `stats` – generates JSON file for analyzing bundle
+ `analyze` – opens analyze report (run `stats` before)
+ `comp` – creates new component (see below for details)
+ `prettier:check` – checks for prettier compliance
+ `prettier:fix` – fixes prettier issues
+ `eslint:check` – checks for eslint compliance
+ `eslint:fix` – fixes eslint issues

## Structure
Boilerplate's structure is pretty simple!

At the root there a some config files and script for creating components via CLI.

`dist` folder contains production build for your project that can be deployed. Do not changing anything here by your hands.

`src` is a working directory which contains your project source code. Below folders are located here.

`assets` is used for static content like images and fonts.

`components` contains your... components! They can be UI (like button, checkbox, etc.) or just simple components, as you like. Components usually has 3 realizations: markup – pug, styles – scss, scripts – javascript (this one may be missing).

`pug` consists of `layouts` (which are shells for different page, e.g. one for online shop interface and other for admin section), `pages` (for pages markup) and `utils` (any utilities you can use for pages or layouts).

`scss` for JavaScript and TypesScript files (you can write both, but it's highly recommended to use TS).

`scss` for global styles (don't write component specific styles here).

`index.js` is entry point for youe JS/TS files.

## Importing images
### Pug
To import image in pug files use **require**. E.g.:

`img(src=require("@/assets/images/static/logo.png"), alt="Logo")`

### Scss
To use images in scss you can simply do it as you did before. E.g.:

`background-image: url('@/assets/images/icons/github-white.svg')`