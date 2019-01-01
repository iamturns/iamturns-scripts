const debugCreator = require("debug")

const debugName = maybeFeatureName =>
  ["iamturns-scripts", maybeFeatureName].filter(Boolean).join(":")

const createDebug = maybeFeatureName =>
  debugCreator(debugName(maybeFeatureName))

const debug = createDebug()

module.exports = {
  debug,
  createDebug,
}
