const path = require("path")

const { pkgPath } = require("./pkg")
const { debug } = require("./debug")

const appDir = path.dirname(pkgPath)
debug("appDir: %s", appDir)

module.exports = {
  appDir,
}
