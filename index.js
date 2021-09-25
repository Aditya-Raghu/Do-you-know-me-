var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Ankit",
    score: 5,
  },

  {
    name: "Ravi",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live?\n",
  answer: "Bhopal"
}, {
  question: "My birthday month?\n",
  answer: "september"
},
{
  question: "My favorite superhero would be?\n",
  answer: "ironman"
},
{
  question: "My Nickname?\n",
  answer: "uddu"
},
{
  question: "My favourite pet?\n",
  answer: "dog"
}];

function welcome() {
 var userName = readlineSync.question("What's your name: ");

  console.log("\nWelcome "+ userName.toUpperCase() + " DO YOU KNOW ADITYA?\n");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


