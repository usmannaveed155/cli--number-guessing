#! /usr/bin/env node

import inquirer from "inquirer"

 // 1) Computer will generate a random number

 // 2) User input  for guessing number

 // 3) Computer user input with computer generated number and show result 


 const randomNumber = Math.floor(Math.random() * 6 + 1);
 
console.log("Welcome to number Guessing game");
 
 const answers = await inquirer.prompt([
  { 
name:"userGuessedNumber",
type:"number",
message:"plaese guess a number between 1-6:" ,
  },
 ]);

 if(answers.userGuessedNumber === randomNumber) {
  console.log("congtratulation! you guessed right number.");
 } else {
  console.log("you guessed wrong number"); 

 }