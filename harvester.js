const modeEnum = {
	"none" : 0,
	"harvest" : 1,
	"upgrade" : 2
}
Object.freeze(modeEnum)

function myMoveTo(creep, positions, condition, options){
	let toGo = -1
	for (const i in positions){
		console.log(creep.moveByPath(creep.room.findPath(creep.pos, positions[i].pos)) + " " + creep.name)
		if (creep.moveByPath(creep.room.findPath(creep.pos, positions[i].pos)) == OK){
			toGo = positions[i]
		}
	}
	if (toGo != -1){
		if (condition(toGo)){
			creep.moveTo(toGo, options)
		}
	}
	else{
		console.log("Could not find any position to move to from the list" + creep.name)
	}
}

var roleHarvester = {

	run: function(creep) {
		if (creep.store.getFreeCapacity() == 0 && creep.memory.role == modeEnum.harvest){
			creep.memory.role = modeEnum.upgrade
		}
		if (creep.store.energy == 0 && creep.memory.role == modeEnum.upgrade){
			creep.memory.role = modeEnum.harvest
		}
		if (creep.memory.role == modeEnum.harvest){
			var sources = creep.room.find(FIND_SOURCES)
			// myMoveTo(creep, sources, (position)=>{
			// 	return creep.harvest(position) == ERR_NOT_IN_RANGE
			// }, {visualizePathStyle: {stroke: '#00ff00'}})
			if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#00ff00'}})
			}
		}
		else {
			var targets = creep.room.find(FIND_STRUCTURES, {
					filter: (structure) => {
						return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
					}
			})
			if (targets.length > 0) {
				if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ff0000'}})
				}
			}
			else {
				if(creep.room.controller) {
					if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller)
					}
				}
			}			
		}
	}
}

module.exports = roleHarvester
