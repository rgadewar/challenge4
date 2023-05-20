var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

function saveLastScore() {
  // Save related form data as an object
  var playerScore = {
    player: student.value,
    score: grade.value,
    // comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("playerScore", JSON.stringify(saveLastScore));
}

function renderLastScore() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastScore = JSON.parse(localStorage.getItem("playerScore"));
  // Check if data is returned, if not exit out of the function
  if (lastScore !== null) {
  document.getElementById("saved-name").innerHTML = lastScore.player;
  document.getElementById("saved-score").innerHTML = lastGrade.score;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
  } else {
    return;
  }
}

submitEl.addEventListener("click", function(event) {
event.preventDefault();
saveLastScore();
renderLastScore();
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastScore();
}
init();



// //  Form submit for playername
// var formEl = document.querySelector("#form");
// var submitEl = document.querySelector("#submit");
// var playerNameEl = document.querySelector("#player-name");
// // saved name
// var savedNameEl = document.querySelector("#saved-name");
// // saved-score
// var savedScoreEl = document.querySelector("#saved-score");

// function storePlayerName(event) {
//   // after submit I don't want to show the form
//   formEl.style.display="none";
//   event.preventDefault();
//   console.log("I am here in form click")
//   var name = playerNameEl.value;
//   savedNameEl.textContent = name;
//   savedScoreEl.textContent= correctQuestions;
// }

// submitEl.addEventListener("click", storePlayerName);