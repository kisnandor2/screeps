// Add another spawns here when new rooms are occupied
const spawnNames = ['W26S39 Spawn']
const spawns = []
for (const i in spawnNames){
    spawns.push(Game.spawns[spawnNames[i]])
    console.log(spawnNames[i])
}
const roomNames = ['W26S39']

module.exports = {
    spawnNames : spawnNames,
    spawns : spawns,
    roomNames: roomNames
}
