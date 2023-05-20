var scoreView = document.querySelector(".scoresCard");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// The init() function fires when the page is loaded 
function init()
{
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderMessage();
}
init();

function renderMessage() {
  for (var i =0; i<highscores.length; i++)
  {
    var listItem = document.createElement("li"); 
    var details = document.createTextNode(highscores[i].firstName + " => " + highscores[i].score)
    listItem.appendChild(details);
    scoreView.appendChild(listItem);
  }
}
