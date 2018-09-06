const path = require("path")
const readPkgUp = require("read-pkg-up")
const debug = require("debug")("utils:path")

const appDir = calcAppDir()
debug("appDir: %s", appDir)

function calcAppDir() {
	// Search for path containing package.json file
	const { path: pkgPath } = readPkgUp.sync()
	debug("package.json path: %s", pkgPath)
	return path.dirname(pkgPath)
}

module.exports = {
	appDir,
}
