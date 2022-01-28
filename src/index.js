import './style.css';
import { ShownNewUser, CheckIfNumber,  } from '../validation';
import win from '../asset/win2.jpeg';
import crown from '../asset/crown.png';
import { FetchNewScore} from '../set__api';


const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');

const PlayerSection = document.querySelector('.player--section');
const playNow = document.querySelector('#play--now');
const submitScore = document.querySelector('#submit--score');
const reloadPage = document.querySelector('.title--king i');
const king = document.querySelector('#fs-w');
const king_Score = document.querySelector('#k--score');
const sec_Score = document.querySelector('#sec--score');
const th_Score = document.querySelector('#th--score');
king.innerHTML = `<img src="${crown}">`;



//RENDER PLAYER FUNCTION
const DisplayPlayer = (Player) => {
  PlayerSection.innerHTML = '';
  Player.forEach((e) => {
    const player = document.createElement('div');
    player.classList.add('player--div');
    player.innerHTML = `
    <p id="player--index">
    <img src="${win}"></p>
    <h3 id="player--name">@${e.user}</h3>
    <p id="player--score">${e.score}</p>`;
    PlayerSection.appendChild(player);
  });
};


const LoadData = async () => {
  const User = await FetchNewScore();
  User.result.sort((a, b) => b.score - a.score);
  // 1st 3 players scores
  king_Score.innerHTML =`${User.result[0].user}: ${User.result[0].score} `;
  sec_Score.innerHTML =`${User.result[1].user}: ${User.result[1].score} `;
  th_Score.innerHTML =`${User.result[2].user}: ${User.result[2].score} `;

  DisplayPlayer(User.result);

}
 
// add newplayer
submitScore.addEventListener ('click', async (e) => {
  e.preventDefault();
  CheckIfNumber();
  number.value = '';
  userName.value = '';
});

playNow.addEventListener ('click', () => {
  ShownNewUser();
});

reloadPage.addEventListener ('click', LoadData);



