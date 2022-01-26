import '../src/style.css';

const PlayerSection = document.querySelector('.player--section');

const PlayerScore = [
  {
    index: 1,
    name: 'Topaz',
    score: 100,
  },
  {
    index: 2,
    name: 'Karis',
    score: 100,
  },
  {
    index: 3,
    name: 'Ben',
    score: 100,
  },
  {
    index: 4,
    name: 'Carter',
    score: 100,
  },
];

const DisplayPlayer = () => {
  PlayerScore.forEach((e) => {
    const player = document.createElement('div');
    player.classList.add('player--div');
    player.id = e.index;
    player.innerHTML = `
    <p id="player--index">${e.index}</p>
    <h3 id="player--name">${e.name}</h3>
    <p id="player--scrore">${e.score}</p>`;
    PlayerSection.appendChild(player);

  });

};

DisplayPlayer();