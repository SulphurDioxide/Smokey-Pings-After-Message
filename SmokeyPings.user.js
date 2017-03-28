// ==UserScript==
// @name        Smokey Pings
// @description Play the ping sound if Smokey has a message at the bottom of the SOCVR chat.
// @author      Henders
// @attribution Andy Henderson (https://github.com/SulphurDioxide)
// @version     0.0.1
// @match       *://chat.stackoverflow.com/rooms/41570/so-close-vote-reviewers*
// ==/UserScript==
console.log('Smokey Pings ran!');
$('#chat').bind('DOMNodeInserted', function(){ 
    //if($('div.user-container:last-child.user-3735529:not(.notified)').length > 0){ 
    if($('div.user-container .user-3735529:not(.notified)').length > 0){ 
        $('#jp_audio_0')[0].play(); 
        //$('div.user-container:last-child.user-3735529:not(.notified)').addClass('notified');
        $('div.user-container .user-3735529:not(.notified)').addClass('notified');
        console.log('notified');
    }
});
