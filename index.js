var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var username = readlineSync.question("What is your name? ");
console.log(chalk.red("Welcome "),username," to DO YOU KNOW ME QUIZ ");
console.log("Lets start: ");

function play(i,ques,ans){
  console.log(i,". ",ques);
  var input = readlineSync.question("Enter your answer: ");

  if(input === ans){
    console.log("You are right!");
    score++;
  }
  else{
    console.log("You are wrong!")
  }

  console.log("Your score is: ",chalk.blue(score));
  console.log("-----------------------------")
}

var questionlist = [
  {
    question:"Where do I live? ",
    answer:"delhi"
  },
  {
    question:"Do I play badminton? ",
    answer:"yes"
  },
  {
    question:"In which month does my birthday come? ",
    answer:"april"
  },
  {
    question:"Which superhero I like? ",
    answer:"ironman"
  }
];

for(var i=0;i<questionlist.length;i++){
  play(i,questionlist[i].question,questionlist[i].answer);
}