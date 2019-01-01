const readPkgUp = require("read-pkg-up")

const { debug } = require("./debug")

const { pkg, path: pkgPath } = readPkgUp.sync()
debug("package.json path: %s", pkgPath)
debug("package.json: %o", pkg)

module.exports = {
  pkg,
  pkgPath,
}
