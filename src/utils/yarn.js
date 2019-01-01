const path = require("path")
const fs = require("fs")

const { appDir } = require("./path")

const isYarn = () => {
  const yarnLockPath = path.join(appDir, "yarn.lock")
  return fs.existsSync(yarnLockPath)
}

module.exports = {
  isYarn,
}
