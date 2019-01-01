const chalk = require("chalk")

const logPrefix = chalk.magenta("[iamturns-scripts]")
const errorPrefix = chalk.red("[ERROR]")

// eslint-disable-next-line no-console
const logMessage = (...args) => console.log(logPrefix, ...args)

const logError = (...args) => logMessage(errorPrefix, ...args)

module.exports = {
  logMessage,
  logError,
}
