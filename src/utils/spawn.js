const crossSpawn = require("cross-spawn")

const debug = require("debug")("utils:spawn")

function spawn(
	{ cmd, args, options = { stdio: "inherit" } },
	{ exitOnError = true } = {},
) {
	debug("Spawning command: %s", cmd)
	debug("Args: %j", args)
	debug("Options: %j", options)
	debug("Exit on error: %j", exitOnError)

	const response = crossSpawn.sync(cmd, args, options)
	debug("Response status: %j", response.status)

	if (exitOnError && response.status !== 0) {
		debug("Exit on error")
		process.exit(response.status)
	}

	return response
}

module.exports = {
	spawn,
}
