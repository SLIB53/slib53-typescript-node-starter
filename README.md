# TypeScript Node Starter

Base repo for a minimally bootstrapped TypeScript project for Node.js. This uses npm, eslint (configured with the Standard style), and nodemon. Feel free to fork and customize for your project.

**Requirements:**
* Node.js 14

Generally, you can bootstrap a new TypeScript project like this:

```sh
mkdir my-typescript-project
cd my-typescript-project

git init
echo 'node_modules' >.gitignore

npm init -y
npm install --save-dev eslint nodemon ts-node typescript
npx eslint --init

mkdir src
echo "'Hello, World!'" >./src/index.ts
```

To additionally work with Node.js however, you will need to configure the application to support builds and the most appropriate Node.js version for your project, as well as the `@types/node` package. See the configuration files in this repo for more details.

## Scripts

### `build`

Runs a build and outputs artifacts to [`./dist`](./dist).

```sh
npm run build
```


### `dev`

Starts a development server locally using nodemon.

```sh
npm run dev
```


### `start`

Runs the app from the build folder. (The app must be built first. See the `build` script.)

```sh
npm run start
```
