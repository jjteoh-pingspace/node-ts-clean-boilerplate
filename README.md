# Project Title

[![version](https://img.shields.io/github/package-json/v/jjteoh-pingspace/node-ts-clean-boilerplate)](./package.json)

This is a boilerplate for project wish to use nodeJS, Typescript, clean architecture. Its built on top of ExpressJS. Some common libraries are included in the project, please refer ```package.json``` for more details.

<br>

![clean architecture](Clean_Architecture.jpg) [extracted from Google]

<br>

<hr>

## Folder Structure:

The base structure look like this:

```
config               → configurations
src                  → source code
 └ data              → data access layer, e.g. db models, data repositories
   └ models          → data structure of data layer (db, files)
   └ repositories    → communicator between data and domain layer
 └ domain            → domain layer, e.g. usecases, entities
   └ entities        → data structure that use within domain layer
   └  usecases       → business rules
 └ lib               → infrastructure layer, e.g. frameworks, db drivers, plugins
 └ presentation      → presentation layer, e.g. controllers, socket gateway
   └ controllers     → route handlers
test                 → test files
tools                → the build tools, CICD tool that not related to the business
.dockerignore        → docker ignore file
.eslintignore        → eslint ignore file
.eslintrc.js         → eslint configurations
.gitignore           → git ignore file
.prettierrc          → prettier configurations
Dockerfile           → docker configurations
gulpfile.js          → Gulp entry file
nodemon.json         → nodemon configurations
package.json         → project info and dependencies
README.md            → repo info
tsconfig.json        → typescript configurations
yarn.lock            → yarn dependencies lockdown
```

<br>

<hr>

## Naming Convention

folder naming convention

- folder_name
- no restriction on plural or singular, depend on use cases
- e.g. system_configs

file naming convention

- file_name.functional_area.file_ext
- no restriction on plural or singuler, depend on use cases
- e.g. user.repository.ts, user_repository.interface.ts

<br>

<hr>

## VS Code Extensions

These extensions are recommended to have in order to standardize coding style:

- ESLint -- EcmaScript linter
- Prettier -- Code formatter

<br>

<hr>

## Get Started

Assumptions:

- `you are running on VS Code on Windows`
- for other development environment, if you face problems in installing the required tools, please refer official manual online, or approach repo maintainers for help.

<br>

1. Clone this repository locally.
2. Install `yarn` globally/locally in your machine, [installation guide](https://classic.yarnpkg.com/en/docs/getting-started).
3. Install development dependencies with
   ```bash
   yarn install # or just yarn
   ```
4. Install Gulp cli globally in your machine, [installation guide](https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility)
5. Make sure you can build the project with:
   ```bash
   yarn build
   ```
6. To run the application in watch mode:
   ```bash
   yarn start:dev
   ```
7. To run the application in production mode:
   ```bash
   yarn start:prod
   ```
8. You can explore more available commands in _package.json_

<br>

<hr>

## Docker

You are encouraged to work in containerized environment to prevent compatibility issue.

Please install docker in your local machine before proceed, to [get started](https://docs.docker.com/get-started/).

To build app into docker image ([need help](https://docs.docker.com/engine/reference/commandline/build/)?):

```
docker build -t <username/my-service>
```

To list available images in your machine([need help](https://docs.docker.com/engine/reference/commandline/images/)?):

```
docker images
```

To run built image ([need help](https://docs.docker.com/engine/reference/commandline/run/)?):

```
docker run -d <container_id>
```

To list running container ([need help](https://docs.docker.com/engine/reference/commandline/ps/)?)::

```
docker ps
```

For more details on how to use docker, please refer [doc](https://docs.docker.com/engine/reference/run/).

<br>

<hr>

## Git Commit Standard

Recommended to follow committizen practices when committing changes. Please install [git cz](https://www.npmjs.com/package/git-cz) on your machine.
