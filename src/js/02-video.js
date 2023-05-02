import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('loaded', () => {
  setTimeout(() => {
    const storedTime = localStorage.getItem(CURRENT_TIME_KEY);
    if (storedTime) {
      player.setCurrentTime(parseInt(storedTime, 10));
    }
  }, 1000);
});

player.on('timeupdate', throttle(({ seconds }) => {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}, 1000));
