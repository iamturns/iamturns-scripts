#!/usr/bin/env node

const chalk = require("chalk")

const { isGitClean } = require("../utils/git")
const { logMessage, logError } = require("../utils/log")
const { setupProcess } = require("../utils/process")
const { getInstallCommand } = require("../utils/install")
const { spawn } = require("../utils/spawn")

setupProcess()

if (!isGitClean()) {
  logError("Unable to run command when git repository has uncommitted changes.")
  process.exit(1)
}

logMessage(chalk.green.bold("# Step 1 of 3"))
logMessage(chalk.green("Clean files outside of version control"))
logMessage("")
spawn("git clean -dfx")

logMessage(chalk.green.bold("# Step 2 of 3"))
logMessage(chalk.green("Reset to most recent git commit"))
logMessage("")
spawn("git reset --hard")

logMessage(chalk.green.bold("# Step 3 of 3"))
logMessage(chalk.green("Reinstall"))
logMessage("")
spawn(getInstallCommand(), { exitOnComplete: true })
