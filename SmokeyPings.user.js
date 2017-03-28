// ==UserScript==
// @name        Smokey Pings
// @description Play the ping sound if Smokey has a message at the bottom of the SOCVR chat.
// @author      Henders
// @attribution Andy Henderson (https://github.com/SulphurDioxide)
// @version     0.0.1
// @match       *://chat.stackexchange.com/rooms/11540/charcoal-hq*
// @match       *://chat.stackoverflow.com/rooms/41570/so-close-vote-reviewers*
// ==/UserScript==

// A list of IDs that can be chosen to follow:
var smokeySO = 3735529;
var smokeySE = 120914;
var henders = 2233391;

/*
    If you want to use smokey on all chat rooms set the userID as 'smokeyALL' and it will select the appropriate smokey ID for the chatroom you are in.
*/
var userID = "smokeyALL";

// Out of all of the listed IDs, which one shall we use?
if(userID == 'smokeyALL'){
    if(window.location.href.indexOf('41570/so-close-vote-reviewers') > 0){
        var userID = smokeySO;
    } else {
        var userID = smokeySE;
    }
}

// Binds the event 'DOMNodeINserted' to the element with the 'chat' id.
$('#chat').bind('DOMNodeInserted', function(){
	// If there is a div with the following classes (userID specifying the user this applies to)
    if($('div.user-container:last-child.user-'+userID+':not(.notified)').length > 0){
    	// Play the chatroom's notification sound
        $('#jp_audio_0')[0].play();
        // Add a class 'notified' to the item so there are not continuous notifications about the same exact item.
        $('div.user-container:last-child.user-'+userID+':not(.notified)').addClass('notified');

        console.log('notified');
    }
});