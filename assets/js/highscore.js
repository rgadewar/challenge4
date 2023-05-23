var scoreView = document.querySelector(".scoresCard");
var clearScoreButton = document.getElementById('clearScore');
var goBackButton = document.getElementById('goBack');


var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// The init() function fires when the page is loaded 
function init()
{
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderMessage();
}
init();

function renderMessage() 
{
  highscores.sort((a, b) => {
  return b.score - a.score;
  })
  
   for (var i =0; i<highscores.length; i++)
   {
     var listItem = document.createElement("li"); 

    var details = document.createTextNode(highscores[i].firstName + " : " + highscores[i].score)
     listItem.appendChild(details);
     scoreView.appendChild(listItem);
   }
 }

clearScoreButton.addEventListener("click", function(event)
{
  localStorage.removeItem("highscores");
  window.location.reload();
});

goBackButton.addEventListener("click", function(event)
{
  window.location.href ='index.html'
});


