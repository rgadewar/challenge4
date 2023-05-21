var questions = [{
  question: "How many legs does a spider have",
  answer1: "7",
  answer2: "8",
  answer3: "9",
  answer4: "10",
  correct: "8"
},{
  question:"What do you call a group of giraffes",
  answer1: "School",
  answer2: "Herd",
  answer3: "group",
  answer4: "tower",
  correct: "tower"
},{
  question: "The condition in an if /else ststement is enclosed with ________",
  answer1: "quotes",
  answer2: "curly brackets",
  answer3: "parenthesis",
  answer4: "square brackets",
  correct: "parenthesis"
},{
  question: "Commonly used data types DO Not include:",
  answer1: "strings",
  answer2: "booleans",
  answer3: "alerts",
  answer4: "numbers",
  correct: "alerts"
},{
  question: "Arrays in Javascript can be used to store",
  answer1: "numbers and strings",
  answer2: "other arrays",
  answer3: "booleans",
  answer4: "all of the above",
  correct: "all of the above"
}];

var timerEl = document.getElementById('countdown');
var startQuizEl = document.getElementById('quizDetails');
// var startQuizLabelEl = document.getElementById('startQuizLabel');
var mainEl = document.getElementById('main');
var quizQuestionEl = document.getElementById('quizQuestion');
var questionsEl = document.querySelector('.questions');
var playerformsEl = document.querySelector('#player-form');
var signUpButton = document.querySelector("#submit");
var firstNameInput = document.querySelector("#player-name");
var lastNameInput = document.querySelector("#last-name");
// countdown();
var startButton = document.getElementById("startQuiz");
var submitButton = document.getElementById('submit');
var highScoreButton = document.getElementById('highScore');



// // saved-score
var savedScoreEl = document.querySelector("#saved-score");

var timeLeft = 75;
var runningQuestion = 0;
var correctQuestions = 0;

function countdown() {
  var timeInterval = setInterval(function () {
      timerEl.textContent = 'Time: '  + timeLeft--;
      questionsEl.style.display="block";
      startQuizEl.style.display="none";
      if(timeLeft ===0 ){
        clearInterval(timeInterval);
        questionsEl.style.display="none";
        playerformsEl.style.display="block";
        timerEl.textContent ='';
        runningQuestion = 0; 
        timeLeft = 75;
        document.getElementById("message").style.display="none";
        document.getElementById("about-me-details").style.display="none";
      }
      else if (runningQuestion == 5 ){
        clearInterval(timeInterval);
        questionsEl.style.display="none";
        startQuizEl.style.display="block";
        playerformsEl.style.display="block";
        timerEl.textContent ='';
        runningQuestion = 0; 
        timeLeft = 75;
        document.getElementById("message").style.display="none";
        document.getElementById("about-me-details").style.display="none";
      }
      document.getElementById("scoreNum").innerHTML = "Your Final score is " + correctQuestions + ".";
  }, 1000);
}

startButton.addEventListener("click", startGame);

function startGame()
{
  
  countdown();
  showQuestions();
}

function showQuestions() {
  var quest = questions[runningQuestion];
  var r = document.querySelector('input');  

  quizQuestionEl.textContent = quest.question;
  console.log(quest.answer1);
  document.querySelector('input[name="radio1"]').value = quest.answer1;
  document.querySelector('input[name="radio2"]').value = quest.answer2;
  document.querySelector('input[name="radio3"]').value = quest.answer3;
  document.querySelector('input[name="radio4"]').value = quest.answer4;
}


var Anchors = document.getElementsByTagName("input");
console.log(Anchors)

for (var i = 0; i < Anchors.length ; i++)
{
    Anchors[i].addEventListener("click", function (event) 
    { 
      event.stopPropagation();
      if(event.currentTarget.value === questions[runningQuestion].correct){
        console.log("Correct");
        correctQuestions++;
        console.log("correctQuestions" + correctQuestions);
        console.log(timeLeft);
        document.querySelector("#message").textContent = "Correct!";
      }
      else{
        if(timeLeft-10 > 0){
        timeLeft = timeLeft - 10;
        document.querySelector("#message").textContent = "Wrong!";
        }
      }
      runningQuestion++;
    if(runningQuestion < 5) {
        showQuestions();
      }
      
    }, false);
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (firstNameInput.value === "") {
    alert("plese enter initials");
    return;
  }

  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var user1 =
  {
  firstName: firstNameInput.value,
  score: correctQuestions,
    
};
  highscores.push(user1);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  playerformsEl.style.display="none";
  window.location.href ='highscore.html'
});

highScoreButton.addEventListener("click", function(event) {
  window.location.href ='highscore.html'
});
