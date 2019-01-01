#!/usr/bin/env node

const path = require("path")

const { debug } = require("./utils/debug")
const { setupProcess } = require("./utils/process")
const { spawn } = require("./utils/spawn")
const { logMessage, logError } = require("./utils/log")

const getScriptPath = scriptName => {
  try {
    const relativeScriptPath = path.join(__dirname, "./scripts", scriptName)
    return require.resolve(relativeScriptPath)
  } catch (error) {
    return undefined
  }
}

const launch = () => {
  const [executor, bin, script, ...args] = process.argv

  const logUsage = () => {
    logMessage(`Usage: ${bin} [script] [--flags]`)
  }

  debug("Executor: %s", executor)
  debug("Bin: %s", bin)
  debug("Script: %s", script)
  debug("Args: %j", args)

  if (!script) {
    logUsage()
    process.exit(0)
  }

  const scriptPath = getScriptPath(script)
  if (!scriptPath) {
    logError(`Unknown script "${script}".`)
    logMessage("")
    logUsage()
    process.exit(1)
  }

  const scriptCommandParts = [executor, scriptPath, ...args]
  const scriptCommand = scriptCommandParts.filter(Boolean).join(" ")
  debug("Script command: %s", scriptCommand)

  spawn(scriptCommand, { exitOnComplete: true })
}

setupProcess()
launch()
