//Variables that the user will see
//Timer
var timerEl = document.getElementById('timer');
//Score
var score = 0;
//h1 Element
var h1El = document.querySelector('h1');
//p Element for quetsions
var questionEl = document.getElementById('question');
//Ordered List and items Element for answers
var listEl = document.querySelector('ol');
var liEl = document.querySelectorAll('il');
//Form Elements
//Input Element for Initials
var initialsInput = document.getElementById('initials');
//Submit Button
var sumbitEl = document.getElementById('submit');


//Time Remaining variable
var timeRemaining = 90;

//I want a welcome page
    //I think I want the welcome page with the start button to be what initializes everything else.
    //On the welcome page I want a start button.  When I click the start button:
        //I want the h1 tag to hide
        //I want the timer to start
        //I want the p tag to show with a question
        //I want the ordered list with the buttons to show
function initialize() {
    h1El.textContent = `Coding Quiz Challenge`;
    questionEl.textContent = `Try to answer the questions before the time runs out.  If you select the wrong answer the time will be reduced`;
    listEl.textContent = ``;


}


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
//When the timer ends or the questions are finished this will have to run

//Function for when the user submits their initials
function highScore(event) {
    event.preventDefault();
}
    //the user can see their score
    //the user can put in their initials
        //I will need a form element for this.
    //after the user inputs thier initials:
        //they see a page with high scores
        //they can press a "go back" button and start the quiz again
        //they can press a "Clear High Scores" button and clear the high scores

/* NOTES:
-Still figuring out how to hide elements that need to be hidden
*/