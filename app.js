import { isYes } from './utils.js';

const qBtn = document.getElementById('btn');
const results = document.getElementById('results');
const message = document.getElementById('message');


qBtn.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the Tony quiz?');
    //console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I love taking naps outside?');
        const ans2 = prompt('Am I named after a tiger?');
        const ans3 = prompt('Am I the youngest animal?');
        const ans4 = prompt('Do I love belly rubs?');
        const ans5 = prompt('Do I love to give hugs?');
        const ans6 = prompt('Do I love spinach?');
        const ans7 = prompt('Do I like my nails trimmed?');
        const ans8 = prompt('Am I grumpy with other animals?');
        //console.log(name, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8);
 
        let score = 0;

        if (isYes(ans1)){
            score++;
        }
        if (isYes(ans2)){
            score++;
        }
        if (!(isYes(ans3))){
            score++;
        }
        if (isYes(ans4)){
            score++;
        }
        if (isYes(ans5)){
            score++;
        }
        if (isYes(ans6)){
            score++;
        }
        if (!(isYes(ans7))){
            score++;
        }
        if (isYes(ans8)){
            score++;
        }

        alert('You have completed the quiz! Check yo results!!');
        //console.log(alert);

        let endScore = score / 8 * 100;
        results.textContent = `Hey, ${name} you got ${score} correct!! That is ${Math.round(endScore)}%`;
        if (endScore < 70) {
            message.textContent = `'bummer you scored ${Math.round(endScore)}%, try again'`;
            message.style.color = 'purple';
        }
        else {
            message.textContent = `'ahhh ya! way to go you got ${Math.round(endScore)}%!'`;
            message.style.color = 'green';
        }
    } 
    //else {
        //console.log('user cancelled');
    
});