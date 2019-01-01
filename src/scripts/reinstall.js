#!/usr/bin/env node

const path = require("path")
const chalk = require("chalk")

const { appDir } = require("../utils/path")
const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/process")
const { getInstallCommand } = require("../utils/install")
const { rimraf } = require("../utils/fs")
const { logMessage } = require("../utils/log")

setupProcess()

logMessage(chalk.green.bold("# Step 1 of 2"))
logMessage(chalk.green("Remove /node_modules"))
logMessage("")
rimraf(path.join(appDir, "node_modules"))

logMessage(chalk.green.bold("# Step 2 of 2"))
logMessage(chalk.green("Install /node_modules"))
logMessage("")
spawn(getInstallCommand(), { exitOnComplete: true })
