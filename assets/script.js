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
var listEl = document.querySelector('#choices');



//var ans2El = document.getElementById('ans2');
//var ans3El = document.getElementById('ans3');
//var ans4El = document.getElementById('ans4');
//Form Elements
//p Element to display final score
var finalScoreEl = document.getElementById('final-score');
//Input Element for Initials
var initialsInput = document.getElementById('initials');
//Submit Button
var submitEl = document.getElementById('submit');
var startEl = document.getElementById('start');


//Time Remaining variable
var timeRemaining = 90;


//Array of questions
var questions = [
    {
        question: "What is JavaScript?",
        answers: ["1. A way to make coffee", "2. Programming Language", "3. HTML", "4. CSS"],
        correctAnswer: 1,
    },
    {
        question: "What is one of the ways comment in JavaScript?",
        answers: ["1. Comment - ", "2. #comment", "3. //comment", "4. .comment"],
        correctAnswer: 2,
    },
    {
        question: "Which one of the following is a primitive data type in JavaScript?",
        answers: ["1. Data Type", "2. const", "3. let", "4. String"],
        correctAnswer: 3,
    },
    {
        question: "What is one of the ways to declare a variable in JavaScript?",
        answers: ["1. var", "2. String = ...", "3. VARIABLE", "4. NUMBER = ..."],
        correctAnswer: 0,
    },
    {
        question: "What is the correct way to declare and initiate a variable in the same line in JavaScript?",
        answers: ["1. var a is 7;", "2. var a = 7;", "3. var a equals 7;", "4. var a to 7;"],
        correctAnswer: 1,
    },
];





var index = 0;

function quiz() {
    //clear elements first
    listEl.innerHTML = '';

    //Display questions
    questionEl.textContent = questions[index].question;

    //Answer list
    for (j=0; j < questions[index].answers.length; j++) {
        
        var liEl = document.createElement('li')
        var ansEl = document.createElement('button')
       
        ansEl.textContent = questions[index].answers[j]
        //Set attribute "data-number=answers[j]"
        ansEl.setAttribute("data-number", [j]);
        ansEl.addEventListener('click',getAnswer)
        liEl.append(ansEl)
        listEl.append(liEl)

        
    }

    
}

//Event Listener for Start Quiz Button
startEl.addEventListener('click', function() {
    setTime();
    quiz();
});

function getAnswer(event) {
    console.log(event.target.getAttribute('data-number'));

    if (event.target.getAttribute('data-number') === questions[index].correctAnswer) {
        index++;
        quiz();
        score++;
        
    } else {
        timeRemaining -= 15;
        index++;
        quiz();
    }

}

function setTime() {
    var timerInterval = setInterval(function () {
       
        if (timeRemaining > 0) {
        timeRemaining--;
        timerEl.textContent = `Time: ${timeRemaining}`;
        } else {
            clearInterval(timerInterval);
            timerEl.textContent = ``;
            gameOver();
        }
    }, 1000);
}



//make the function for the buttons of the choices evaluate the answer and run quiz one more time with the next question and choices

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
function gameOver() {
    finalScoreEl.textContent = `Your final score is ${score}.`;
    //code for revealing the form
    //get user input and store in local storage
    sumbitEl.addEventListener("click", highScore);//run the function for displaying the high scores
}

//Function for when the user submits their initials
function highScore(event) {
    event.preventDefault();
}

    //after the user inputs thier initials:
        //they see a page with high scores
        //they can press a "go back" button and start the quiz again
        //they can press a "Clear High Scores" button and clear the high scores

/* NOTES:
-Still figuring out how to hide elements that need to be hidden
 to hid things look at 04-Web-API's File 20.  Having data attributes of state: hidden and content: question and changing the state content.
*/