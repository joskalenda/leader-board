import { addNewScore } from './set__api.js';

const showForm = document.querySelector('#form-id');
const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');

export const CheckIfNumber = async () => {
  if ((!Number.isInteger(Number(number.value)))) {
    document.getElementById('error').innerText = 'Please enter Numeric score value';
    setTimeout(() => {
      document.getElementById('error').innerText = '';
    }, 3000);
    return false;
  } if (number.value === '' || userName.value === '') {
    document.getElementById('error').innerText = 'field empty, please fill and resubmit';
    setTimeout(() => {
      document.getElementById('error').innerText = '';
    }, 3000);
    return false;
  } if (number.value <= 10) {
    document.getElementById('error').innerText = 'Invalid, Score must be more than (10) ';
    setTimeout(() => {
      document.getElementById('error').innerText = '';
    }, 3000);
    return false;
  }
  await addNewScore();
  return true;

  // add newplayer if input valid
};

export const ShownNewUser = () => {
  showForm.style.display = 'flex';
};