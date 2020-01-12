const constants = require("constants")

function create(){
	for(var name in Memory.creeps) {
		if(!Game.creeps[name]) {
			delete Memory.creeps[name]
		}
	}

	const toCreate = []
	// Create harvesters
	var harvesters = {
		creeps : _.filter(Game.creeps, (creep) => 1 == 1),
		maxNum : 5,
		name : 'Harvester',
		mode : [WORK, CARRY, MOVE]
	}
	toCreate.push(harvesters)
	// Create other types as well
	for (const i in toCreate){
		let type = toCreate[i]
		// console.log(type.name + ": " + type.creeps.length + " exist out of " + type.maxNum)
		if (type.creeps.length < type.maxNum){
			let newName = type.name + Game.time
			console.log('Spawning: ' + newName)
			constants.spawns[0].spawnCreep(type.mode, newName, {memory: {role: 1}})
		}
	}
}

module.exports.create = create
