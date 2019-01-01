const { execSync } = require("child_process")

const isGitClean = () => {
  const gitStatus = execSync("git status --porcelain")
  return gitStatus.length === 0
}

module.exports = {
  isGitClean,
}
