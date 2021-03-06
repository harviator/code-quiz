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

var finalScoreEl = document.getElementById('final-score');
//Input Element for Initials
var initialsInput = document.getElementById('initials');
//Submit Button
var submitEl = document.getElementById('submit');
var startEl = document.getElementById('start');

var formEl = document.getElementById('myForm');


//Time Remaining variable
var timeRemaining = 90;

var allTimeScores = JSON.parse(localStorage.getItem("allTimeScores"))  || [];


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

//Runs through the quiz questions and answers
function quiz() {
    
    if (questions[index] == undefined) {
        timerEl.textContent = ``;
        timeRemaining = 0;
    
    } else {

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
}

//Event Listener for Start Quiz Button
startEl.addEventListener('click', function() {
    
    h1El.classList.remove("show");
    h1El.classList.add("hide");


    startEl.classList.remove("show");
    startEl.classList.add("hide");

    setTime();
    quiz();
});

//Evaluates the answer, updates the score, and retrieves the next questions
function getAnswer(event) {

    if (event.target.getAttribute('data-number') == questions[index].correctAnswer) {
        score += 20;
        index++;
        quiz();
        
    } else {
        timeRemaining -= 15;
        index++;
        quiz();
    }
}

//Timer Function
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

//Function for  when the game ends
function gameOver() {
    formEl.classList.remove("hide");
    formEl.classList.add("show");

    questionEl.textContent = '';
    listEl.innerHTML = '';

    finalScoreEl.textContent = `Your final score is ${score}.`;

    formEl.addEventListener("submit", highScore)
}

//Function for when the user submits their initials
function highScore(event) {
    event.preventDefault();

    var newRecord = {
        initials: initialsInput.value,
        score: score
    }

    allTimeScores.push(newRecord);

    localStorage.setItem("allTimeScores", JSON.stringify(allTimeScores))

    location.replace('scores.html');


}