const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');
const GAME_ID = '/1KkwOLyCjcLDgikgiZyL/';
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const addNewScore = async () => {
  const DataStore = { user: userName.value, score: number.value };
  const response = await fetch(`${URL}games${GAME_ID}scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DataStore),
      // eslint-disable-next-line comma-dangle
    });
  const data = await response.json();
  return data;
};

export const FetchNewScore = async () => {
  const response = await fetch(
    // eslint-disable-next-line comma-dangle
    `${URL}games${GAME_ID}scores`,
  );
  const data = await response.json();
  return data;
};