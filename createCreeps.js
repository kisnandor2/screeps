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
		maxNum : 3,
		name : 'Harvester',
		mode : [WORK, CARRY, MOVE],
		cost : 200
	}
	toCreate.push(harvesters)
	// Create other types as well
	for (const i in toCreate){
		let type = toCreate[i]
		// console.log(type.name + ": " + type.creeps.length + " exist out of " + type.maxNum)
		if (type.creeps.length < type.maxNum){
			let newName = type.name + Game.time
			console.log("Trying to create " + type.name)
			if (constants.spawns()[0].room.energyAvailable >= type.cost){
			    let createRet = constants.spawns()[0].spawnCreep(type.mode, newName, {memory: {role: 1}})    
			    if (createRet >= 0){
			    console.log('Spawning: ' + newName)    
    			}
    			else{
    			    console.log("Could not create " + type.name + " error: " + createRet)
    			}
			}
			else{
			    console.log("Not enough energy to create " + type.name)
			}
			
			
		}
		else{
		    console.log("No need to create " + type.name)
		}
	}
}

module.exports.create = create
