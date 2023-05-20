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
  correct: "2061"
}];

var timerEl = document.getElementById('countdown');
var startQuizEl = document.getElementById('startQuiz');
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


// // saved-score
var savedScoreEl = document.querySelector("#saved-score");

var timeLeft = 30;
var runningQuestion = 0;
var correctQuestions = 0;
// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

function countdown() {
  var timeInterval = setInterval(function () {
      timerEl.textContent = 'Time: '  + timeLeft--;
      questionsEl.style.display="block";
      startQuizEl.style.display="none";
      // playerformsEl.style.display="none";
      // startQuizEl.style.display="block"
      // startQuizLabelEl.style.display="none";
      if(timeLeft ===0 ){
        clearInterval(timeInterval);
        questionsEl.style.display="none";
        // startQuizEl.style.display="block";
        playerformsEl.style.display="block";
        timerEl.textContent ='';
        runningQuestion = 0; 
        timeLeft = 30;
        // savedScoreEl.textContent= correctQuestions;
        // window.location.href ='highscore.html'

       
      }
      else if (runningQuestion == 5 ){
        clearInterval(timeInterval);
        questionsEl.style.display="none";
        startQuizEl.style.display="block";
        playerformsEl.style.display="block";
        timerEl.textContent ='';
        runningQuestion = 0; 
        timeLeft = 30;
        // savedScoreEl.textContent= correctQuestions;
        // window.location.href ='highscore.html'

      }
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
        // runningQuestion++;
        timeLeft = timeLeft + 5;
        console.log(timeLeft)
      }
      else{
        if(timeLeft-5 > 0){
        timeLeft = timeLeft - 5;
        }
      }
      runningQuestion++;
    if(runningQuestion < 5) {
        showQuestions();
      }
    }, false);
  
}

document.querySelector('.message').style.display="none";

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var user1 =
  {
  firstName: firstNameInput.value,
  score: timeLeft,
    
};
  highscores.push(user1);
// localStorage.setItem("highscores", JSON.stringify(highscores));
  localStorage.setItem("highscores", JSON.stringify(highscores));
  playerformsEl.style.display="none";
  // renderMessage();
});
