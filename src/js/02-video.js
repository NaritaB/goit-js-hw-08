import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem(CURRENT_TIME_KEY, currentTime);
  }, 1000)
);

const storedTime = localStorage.getItem(CURRENT_TIME_KEY);
if (storedTime) {
  player.setCurrentTime(storedTime);
}
