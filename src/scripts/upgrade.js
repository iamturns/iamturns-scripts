#!/usr/bin/env node

const path = require("path")
const chalk = require("chalk")

const { appDir } = require("../utils/path")
const { rimraf } = require("../utils/fs")
const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/process")
const { isYarn } = require("../utils/yarn")
const { getInstallCommand } = require("../utils/install")
const { logMessage } = require("../utils/log")

setupProcess()

// Cache isYarn before removing lock files
const isYarnResponse = isYarn()

logMessage(chalk.green.bold("# Step 1 of 2"))
logMessage(
  chalk.green(
    "Automatically upgrade dependencies based on package.json semver rules",
  ),
)
logMessage(
  chalk.green(
    "This is a safe operation (assuming dependencies correctly follow semantic versioning)",
  ),
)
logMessage("")

logMessage("Remove lock file(s)")
rimraf(path.join(appDir, "package-lock.json"))
rimraf(path.join(appDir, "yarn.lock"))

logMessage("Remove /node_modules")
rimraf(path.join(appDir, "node_modules"))

logMessage("Reinstall dependencies")
spawn(getInstallCommand(isYarnResponse))

logMessage(chalk.green.bold("Step 2 of 2"))
logMessage(
  chalk.green(
    "Check for outdated dependencies (outside of semver rules in package.json)",
  ),
)
logMessage("")

// --skip-unused = unused module checking is unreliable
spawn("npm-check --update --skip-unused", { exitOnComplete: true })
