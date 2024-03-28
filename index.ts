#! /usr/bin/env node

// 1. computer generated  number..done
// 2.user input done..
// 3.campare user input with generated number show result.
// cli project  talha  haroon ..

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await  inquirer.prompt ([
    {
        name: "guessedNumber",
        type : "number",
        message : "please guess a number between 1 to 6; ",
    }
]);

if (answers.guessedNumber === randomNumber)
{
    console.log ("congratulation!you guess a right number:");
}else{
    console.log ("sorry!you guess a wrong number:");
}
