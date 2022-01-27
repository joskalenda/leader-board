import { addUserScore} from './set__api';

const showForm = document.querySelector('#form-id');
const number = document.querySelector('#number');
const userName = document.querySelector('#user--name');

export const CheckIfNumber = async () => {
  if (isNaN(number.value)) {
    document.getElementById("error").innerText = "Please enter Numeric score value";
    setTimeout(function(){
      document.getElementById("error").innerText = "";
    }, 3000); 
    return false;
  } else if (number.value === '' || userName.value === '') {
    document.getElementById("error").innerText = "field empty, please fill and resubmit ";
    setTimeout(function() {
      document.getElementById("error").innerText = "";
    }, 3000);
    return false;
  } else if (number.value <= 10) {
    document.getElementById("error").innerText = "Invalid, Score must be more than (10) ";
    setTimeout(function() {
      document.getElementById("error").innerText = "";
    }, 3000);
    return false;
  }else {
    // add newplayer if input valid 
    await addUserScore();
    return true;
  };
};

export const ShownNewUser = () => {
  showForm.style.display = 'flex';
}