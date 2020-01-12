/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('safeMode');
 * mod.thing == 'a thing'; // true
 */
const constants = require("constants")

function activateSafeMode(){
    var hostiles = Game.rooms[constants.roomNames[0]].find(FIND_HOSTILE_CREEPS);
    if (hostiles.length > 0) {
        Game.rooms[constants.roomNames[0]].controller.activateSafeMode();
    }    
}


module.exports = {
    activateSafeMode: activateSafeMode
};