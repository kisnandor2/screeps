const constants = require("constants")

function activateSafeMode(){
	var hostiles = Game.rooms[constants.roomNames[0]].find(FIND_HOSTILE_CREEPS)
	if (hostiles.length > 0) {
		Game.rooms[constants.roomNames[0]].controller.activateSafeMode()
	}
}

module.exports = {
	activateSafeMode: activateSafeMode
}
