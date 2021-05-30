var clearEl = document.getElementById('clear');
var listEl = document.querySelector('#scores');

var allTimeScores = JSON.parse(localStorage.getItem("allTimeScores"))  || [];

//Function to display the scores
function displayScores() {
    
    for (let index = 0; index < allTimeScores.length; index++) {
        
        console.log(allTimeScores[index]);
        
        var initials = allTimeScores[index].initials;
        var score = allTimeScores[index].score;
        var nameScore = document.createElement('li');

        nameScore.textContent = initials + " - " + score;

        listEl.append(nameScore);


    }
}

displayScores();

//Function to clear the scores
function clearScores() {
    localStorage.clear();
    listEl.textContent = '';
}

clearEl.addEventListener('click', clearScores);