import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.getCurrentTime().then(function(data) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
