import './style.css';
import { ShownNewUser, CheckIfNumber } from '../validation.js';

// import img
import win from '../asset/win2.jpeg';
import crown from '../asset/crown.png';
import jos from '../asset/jos.jpg';
import { FetchNewScore } from '../set__api.js';

const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');

const PlayerSection = document.querySelector('.player--section');
const playNow = document.querySelector('#play--now');
const submitScore = document.querySelector('#submit--score');
const reloadPage = document.querySelector('.title--king i');

const king = document.querySelector('#fs-w');
const KingScore = document.querySelector('#k--score');
const SecScore = document.querySelector('#sec--score');
const ThScore = document.querySelector('#th--score');
const Owner = document.querySelector('.pop--img');
king.innerHTML = `<img src="${crown}">`;

// popup variables
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// RENDER PLAYER FUNCTION
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
  KingScore.innerHTML = `${User.result[0].user}: ${User.result[0].score} `;
  SecScore.innerHTML = `${User.result[1].user}: ${User.result[1].score} `;
  ThScore.innerHTML = `${User.result[2].user}: ${User.result[2].score} `;

  DisplayPlayer(User.result);
};

// add newplayer
submitScore.addEventListener('click', async (e) => {
  e.preventDefault();
  CheckIfNumber();
  number.value = '';
  userName.value = '';
});

playNow.addEventListener('click', () => {
  ShownNewUser();
});

reloadPage.addEventListener('click', LoadData);

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  Owner.innerHTML = `<img src="${jos}">`;
};

const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});