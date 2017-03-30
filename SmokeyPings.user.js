// ==UserScript==
// @name        Smokey Pings After Message
// @description Play the ping sound if Smokey has a message at the bottom of the SOCVR chat.
// @author      Henders
// @attribution Andy Henderson (https://github.com/SulphurDioxide)
// @version     0.0.2
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
    If you want to use smokey on all chat rooms set the userID as 'smokeyALL' and it will select the appropriate smokey ID for the chatroom you are in.
*/
var userID = smokeyID;


// Binds the event 'DOMNodeINserted' to the element with the 'chat' id.
$('#chat').bind('DOMNodeInserted', function(){
	// jQuery object of the last child of the chat:
	var lastChild = $('div.user-container:last-child.user-'+userID+':not(.notified)')
	
	// If there is a div with the following classes (userID specifying the user this applies to)
    if(lastChild.length > 0){
    	// Play the chatroom's notification sound
        $('#jp_audio_0')[0].play();
        // Add a class 'notified' to the item so there are not continuous notifications about the same exact item.
        lastChild.addClass('notified');

        console.log('notified');
    }
});
