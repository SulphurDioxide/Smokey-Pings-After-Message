// ==UserScript==
// @name        Smokey Pings After Message (SPAM)
// @description Play the ping sound if Smokey has a message at the bottom of the SOCVR chat.
// @author      Henders
// @attribution Andy Henderson (https://github.com/SulphurDioxide)
// @version     0.0.3
// @match       *://chat.stackexchange.com/rooms/11540/charcoal-hq*
// @match       *://chat.stackoverflow.com/rooms/41570/so-close-vote-reviewers*
// ==/UserScript==

// A list of IDs that can be chosen to follow:
var henders = 2233391;

// Set the constant by passing in an object and then selecting which key to use based on the current host:
const smokeyID = {
	'chat.stackexchange.com':120914,
	'chat.stackoverflow.com':3735529,
}[window.location.host];

/*
    One day this will be selectable so you can choose which ID you want notifying about. 
    
    For example, this could equally ping you for FireAlarm, Queen etc... 
*/
var userID = smokeyID;

// Testing the new part: 
CHAT.addEventHandlerHook(chatMessageRecieved);

function chatMessageRecieved({event_type, user_id, content}){
    // First, check the event_type is 1 (message posted):
    if(event_type != 1){
        // It isn't a 'message posted' event:
        return false;
    }
    
    //Check the user_id the one we expect it to be:
    if(userID == user_id){
        // This is the id we were looking for (in most cases Smokey):
        // Play the ping sound:
        $('#jp_audio_0')[0].play();
        
    }
}
