# iamturns-scripts

Common scripts for my projects.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Scripts](#scripts)
  - [iamturns-scripts upgrade](#iamturns-scripts-upgrade)
  - [iamturns-scripts upgrade-latest](#iamturns-scripts-upgrade-latest)
  - [iamturns-scripts reinstall](#iamturns-scripts-reinstall)
  - [iamturns-scripts reset](#iamturns-scripts-reset)
- [Inspiration](#inspiration)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
npm install iamturns-scripts --save-dev
```

## Scripts

### iamturns-scripts upgrade

Update `/node_modules` and `/package-lock.json` according to semver rules defined in `/package.json`.

This should be safe to run (assuming all dependencies follow semver).

### iamturns-scripts upgrade-latest

Check outdated dependencies (including versions outside semver rules defined in `/package.json`), and interactively select dependencies to update.

### iamturns-scripts reinstall

Remove `/node_modules` and reinstall.

### iamturns-scripts reset

Reset to a fresh git checkout and reinstall.

## Inspiration

- [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)
- [react-scripts](https://github.com/facebook/create-react-app/tree/next/packages/react-scripts)

## License

Open source software [licensed as MIT](https://github.com/iamturns/iamturns-scripts/blob/master/LICENSE).