import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

const keyToStorage = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function getTime (currentTime) {
    const time = currentTime.seconds;
    localStorage.setItem(keyToStorage, time);
}

player.on('timeupdate', getTime);

player.setCurrentTime(localStorage.getItem(keyToStorage) || 0);
