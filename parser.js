// import prompt sync to take inputs
const prompt = require('prompt-sync')();

// require the spoiler log file (you need to update this)
const spoilerLog = require('./OoTR_724846_BGP02BX0QU_Spoilers.json');

// prompt the user for the item they are looking for and convert to lowercase for searching later on
let lookingFor = prompt('What are you looking for (item name)? ');
lookingFor = lookingFor.toLowerCase();

// prompt the user for the player ID of the user they want to find the item for
let playerID = prompt('Which player needs the item (player ID)? ');

// loop through locations data to get our matches
for ( const [world, data] of Object.entries(spoilerLog.locations) ) {
    for ( const [location, itemData] of Object.entries(data) ) {
        let item = itemData.item.toLowerCase();
        if ( item.search(lookingFor) !== -1 && itemData.player == playerID ) {
            console.log('The item you are looking for is in ' + world + '. It appears in the "'+ location +'" check.');
        }
    }
}
