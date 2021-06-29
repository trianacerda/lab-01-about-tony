//const confirmed = confirm ("hello");
//console.log(confirmed);
//const myName = prompt("Am I named after a cereal?");
//console.log(myName);

//get btn element
//add "click" event listener to btn
//confirm user wants to start the quiz
//if yes-prompt for 8 questions and store answers
//for each answer, check if the user entered a correct value
//track the number of correct answers
//end of quiz-update the results section w/ # of correct answers

const qBtn = document.getElementById('btn');
const results = document.getElementById('results');

qBtn.addEventListener('click', ()=>{
const confirmed =confirm('Would you like to start the Tony quiz?');
console.log(confirmed);
if (confirmed){
const name = prompt('What is your name?');
const ans1 = prompt('');
const ans2 = prompt('');
const ans3 = prompt('');
const ans4 = prompt('');
const ans5 = prompt('');
const ans6 = prompt('');
const ans7 = prompt('');
const ans8 = prompt('');
    console.log(name, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8);
  }
    else {
      console.log('user cancelled');
    }
});
