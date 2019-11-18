# MonoRepo Example with Lerna and Yarn

## MonoRepo [What](https://www.tomasvotruba.cz/blog/2019/10/28/all-you-always-wanted-to-know-about-monorepo-but-were-afraid-to-ask/) and [when](https://www.tomasvotruba.cz/blog/2018/11/19/when-you-should-use-monorepo-and-when-local-packages/)
A monorepo is a repository consisting of multiple packages/packages which can be related but not necessary. Few of the famous monorepos are managed by Babel, Facebook, Google. Monolith !== monorepo. Monolith is huge amount of coupled code of 1 application that is hell to maintain.

## Advantage
-   Simplified organization.
-   Easy to coordinate changes across modules.
-   Simplified dependencies.
-   Single lint, build, test and release process.
-   Tooling.
-   Single place to report issues
-   Cross-project changes
-   Tests across modules are run together → finds bugs that touch multiple modules easier

## Steps with [yarn](https://yarnpkg.com/en/docs/workspaces) and Lerna
-   create a package.json file in root directory or just hit npm init.
-   Add `private: true ` in package.json to avoid accidental publishing of private repositories.
- Add `workspaces: ["packages"]` in package.json to add and access all the projects/packages.
-   cd into the directories and hit yarn init -y
-   Hit yarn install anywhere in the project mostly in the root directory, this creates a symklink i.e it creates a link between the package and generated packages in the node_modules
-  To install lerna add yarn -D -W lerna where -D is for dev dependency alternatively can be installed with npm 
-   Hit `npx lerna init --independent/-i` (Use -i for independent versioning mode) and generate lerna repo.
-   Add `useWorkspaces: true` and `npmClient: yarn` in lerna.json.
-   Use `lerna run <command name>` to run command across all packages within the project
- We can add scoping with Lerna by using `lerna run <command name --scope= @projectname/packagename>` this should be same as that of package.json.
- Scoping can be done for multiple packages too example `lerna run <command name --scope= {@projectname/pkg1, @projectname/pkg2}>`.

## [Lerna Commands](https://github.com/lerna/lerna#readme)
- **lerna init** - \
    Creates a new lerna repo or upgrade existing to lerna comes with *--independent* flag for independent versioning.

-   **lerna bootstrap** - \
    Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies. This command is crucial, as it allows you to use your package names in require() as if the packages were already existing and available in your node_modules folder.

-   **lerna run** - \
    Run an npm script in each package that contains that script. Alternatively, @scope can be used to run the command on the mentioned packages.

-   **lerna version** - \
    Bump version of packages changed since the last release. [More here.](https://github.com/lerna/lerna/tree/master/commands/version#readme) 
    \
    When run, this command does the following:
    1.  Identifies packages that have been updated since the previous tagged release.
    2.  Prompts for a new version.
    3.  Modifies package metadata to reflect new release.
    4.  Commits those changes and tags the commit.
    5.  Pushes to the git remote.

- **lerna publish** - \
    Publish packages in the current project. [More Options](https://github.com/lerna/lerna/tree/master/commands/publish#readme)

-   **lerna changed** - \
    Check which packages have changed since the last release.

-   **lerna diff** - \
    Diff all packages or a single package since the last release.[More](https://github.com/lerna/lerna/tree/master/commands/diff#readme)
