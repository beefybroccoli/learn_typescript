"use strict";
var inquirer = require("inquirer");
// var questions = [
//     {
//         name: "first_name",
//         message: "what is your name?",
//     }
// ]
// inquirer.prompt(questions)
//     .then( 
//         function( answers :   {first_name : string}) : void {
// 	        console.log(`you answered: ${answers.first_name}`);
//         }
//     );
// inquirer.prompt(questions)
//     .then( 
//         function( answers :   {first_name : string}) {
// 	        console.log(`you answered: ${answers.first_name}`);
//         }
//     );
inquirer.prompt([
    {
        name: "first_name",
        message: "what is your name?",
    }
])
    .then(function (response) {
    console.log(response);
});
//# sourceMappingURL=third_party_inquirer.js.map