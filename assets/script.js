//Variables that the user will see
var h1El = document.querySelector('h1');
var timerEl = document.getElementById('timer');


//Time Remaining variable
var timeRemaining = 90;

//I want a welcome page
    //On the welcome page I want a start button
h1El.textContent = `Coding Quiz Challenge`;

//when the start button is pressed
    //the page is refreshed
        //the page has a question
        //the page has 4 buttons that correspond to answers
        //the page has a timer in the top right corner
function setTime() {
    var timerInterval = setInterval(function () {
        if (timeRemaining > 0) {
        timeRemaining--;
        timerEl.textContent = `Time: ${timeRemaining}`;
        } else {
            clearInterval(timerInterval);
            timerEl.textContent = ``;
        }
    }, 1000);
}

setTime();
            //the timer:
                //when timer gets to zero the game stops
                //the timer is reduced when a question is answered incorrectly - as mentioned below
        //when a answer is selected:
            //if the answer is correct:
                //the score is incremented
                //stored on local storage
                //the user can see "Correct!" at the bottom of the page
            //if the answer is incorrect:
                //the timer is reduced
                //the user sees "Incorrect" at the bottom of the page
            //the page reloads with a new question and answers

//When the game ends:
    //the user can see their score
    //the user can put in their initials
    //after the user inputs thier initials:
        //they see a page with high scores
        //they can press a "go back" button and start the quiz again
        //they can press a "Clear High Scores" button and clear the high scores

