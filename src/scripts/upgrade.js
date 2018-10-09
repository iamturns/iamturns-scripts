const path = require("path")
const debug = require("debug")("upgrade")

const { appDir } = require("../utils/path")
const { rimraf } = require("../utils/fs")
const { spawn } = require("../utils/spawn")
const { setupProcess, isYarn, getInstallCommand } = require("../utils/app")
const { logMessage } = require("../utils/log")

setupProcess()

// Cache isYarn before removing lock files
const isYarnResponse = isYarn()

logMessage("Removing lock files")
rimraf(path.join(appDir, "package-lock.json"))
rimraf(path.join(appDir, "yarn.lock"))

logMessage("Removing /node_modules")
rimraf(path.join(appDir, "node_modules"))

const installCommand = getInstallCommand(isYarnResponse)
debug("Install command: %j", installCommand)
spawn(installCommand, { exitOnComplete: true })
