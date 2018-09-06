const { spawn } = require("../utils/spawn")
const { setupProcess } = require("../utils/app")

setupProcess()

// --skip-unused enabled because unused module checking is flaky
const upgradeCommand = {
	cmd: "npm-check",
	args: ["--update", "--skip-unused"],
}

const commandResult = spawn(upgradeCommand)
process.exit(commandResult.status)
