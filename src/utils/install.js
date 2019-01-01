const { isYarn } = require("./yarn")

const getInstallCommand = (useYarn = isYarn()) =>
  useYarn ? "yarn" : "npm install"

module.exports = {
  getInstallCommand,
}
