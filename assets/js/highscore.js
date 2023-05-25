var scoreView = document.querySelector(".scoresCard");
var clearScoreButton = document.getElementById('clearScore');
var goBackButton = document.getElementById('goBack');


var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var userCurrent = JSON.parse(sessionStorage.getItem("currentuser"))
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

  var keys = Object.keys(highscores);
  var min = highscores[keys[0]]; // ignoring case of empty list for conciseness
  var max = highscores[keys[0]];
  var i;

  for (i = 1; i < keys.length; i++) {
      var value = highscores[keys[i]];
      if (value < min) min = value;
      if (value > max) max = value;
  }
 console.log(max)
   for (var i =0; i<highscores.length; i++)
   {
    // to show current user score
    // if(highscores[i].firstName == userCurrent)
    // {
      var listItem = document.createElement("li"); 
      var details = document.createTextNode(highscores[i].firstName + " : " + highscores[i].score)
      listItem.appendChild(details);
      scoreView.appendChild(listItem);
  //  }
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


