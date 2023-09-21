import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');
const keyToStorage = "videoplayer-current-time";


