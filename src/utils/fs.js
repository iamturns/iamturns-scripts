const fs = require("fs")
const rimrafPackage = require("rimraf")
const { debug } = require("./debug")

const rimraf = path => {
  debug("Removing: %s", path)
  rimrafPackage.sync(path)
}

const isDir = path => fs.lstatSync(path).isDirectory()

module.exports = {
  rimraf,
  isDir,
}
