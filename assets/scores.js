var clearEl = document.getElementById('clear');
var allTimeScores = JSON.parse(localStorage.getItem("allTimeScores"))  || [];

console.log(allTimeScores);

var listEl = document.querySelector('#scores');

function displayScores() {
    
    for (let index = 0; index < allTimeScores.length; index++) {
        
        console.log(allTimeScores[index]);
        
        var initials = allTimeScores[index].initials;
        var score = allTimeScores[index].score;
        var nameScore = document.createElement('li');

        nameScore.textContent = initials + " - " + score;

        console.log(initials, score);

        listEl.append(nameScore);


    }
}

displayScores();

function clearScores() {
    localStorage.clear();
    listEl.textContent = '';
}

clearEl.addEventListener('click', clearScores);