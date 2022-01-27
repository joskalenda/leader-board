import './style.css';
// import {king, crown, win2, win3} from '../asset/king.jpeg';
import { ShownNewUser, CheckIfNumber,  } from '../validation';
import { getUserScore} from '../set__api';

const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');

const PlayerSection = document.querySelector('.player--section');
const playNow = document.querySelector('#play--now');
const submitScore = document.querySelector('#submit--score');
const reloadPage = document.querySelector('.title--king i');


const DisplayPlayer = (Player) => {
  Player.forEach((e) => {
    const player = document.createElement('div');
    player.classList.add('player--div');
    player.innerHTML = `
    <p id="player--index">
    <img src="${king}"></p>
    <h3 id="player--name">${e.user}</h3>
    <p id="player--score">${e.score}</p>`;
    PlayerSection.appendChild(player);
  });
};


const display = async () => {
  const getUser = await getUserScore();
  getUser.result.sort((a, b) => b.score - a.score);
  DisplayPlayer(getUser.result);

}

// add newplayer
submitScore.addEventListener ('click', async (e) => {
  e.preventDefault();
  CheckIfNumber();
  number.value = '';
  userName.value = '';
  display(); 
});
playNow.addEventListener ('click', () => {
  ShownNewUser();
});
reloadPage.addEventListener ('click', display);

