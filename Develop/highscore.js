var firstNameInput = document.querySelector("#player-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#submit");
var playerformsEl = document.querySelector('#player-form');

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderMessage();
  }
init();

function renderMessage() {
for (var i =0; i<highscores.length; i++)
{
    var name = document.createElement("span")
    var score = document.createElement("span")
    name.textContent = highscores[i].firstName;
    score.textContent =  highscores[i].score
    document.querySelector(".card").appendChild(name);
    document.querySelector(".card").appendChild(score); 
  }
}


