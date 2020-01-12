const constants = require("constants")
const harvester = require("harvester")
const createCreeps = require("createCreeps")
const safeMode = require("safeMode")

module.exports.loop = () => {
	safeMode.activateSafeMode()
	createCreeps.create()
    for(var creepName in Game.creeps) {
        var creep = Game.creeps[creepName]
        harvester.run(creep)
    }
}
