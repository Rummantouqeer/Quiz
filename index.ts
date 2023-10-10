//Quiz System
/*The app will show the students multiple choice questions and promt the user to reply. 
In the end it will show the students the result of the quiz.*/


import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation, { rainbow } from 'chalk-animation';
import showBanner from 'node-banner';
import choices from 'inquirer/lib/objects/choices.js';
import { types } from "util";

(async () => {
    await showBanner('Welcome to the  Quiz', 'Please enter your ID and pin to open the portal\n');
})();




let continueExit = true;
type UserType = {
    name:string,
    ID:string,
    pin:number,
    Marks:number,
    
}

let user:UserType = {
    name:"rumman touqeer",
    ID:"rumman123",
    pin:2424,
    Marks:50,
    


}


const resp = await inquirer.prompt([
    {
        name:"ID",
        message:"\nenter your ID",
        type:"string",
    },
    {
        name:"pin",
        message:"Enter a pin",
        type:"number",
    },

])
console.log("resp:",resp);
if(resp.pin!=user.pin){
    console.log(chalk.red("you have entered wrong pin"));
}

    
    else {
        const quiz = await inquirer.prompt([
            {
        
                name:"selectedTypes",
                type:"list",
                message:"solve the following questions",
                choices:[1,2,3,4,5],
            },
            {
                name:"questions",
                type:"list",
                Marks:10,
                message:"what is the capital of france",
                choices: ["Paris","london","Berlin"],
                correctindex:"Paris",
                when(resp){
                    return resp.selectedTypes == "1"

                }
            },
            

            
        ])
        let correctindex ="Paris";
        console.log("quiz:",quiz);
        if(quiz.questions!=correctindex){
            console.log(chalk.redBright(`RESULT:Your answer was wrong!`))
            
            
        }

        else{
            console.log(chalk.greenBright(`RESULT:Your answer was correct!`))
            


        }
    }
    ;
    const Quiz = await inquirer.prompt([
        {
    
            name:"selectedTypes",
            type:"list",
            message:"solve the following questions",
            choices:[2,3,4,5],
        },
        {
            name:"questions",
            type:"list",
            Marks:"10",
            message: "what is square root of 25?",
            choices: ["5","6","7"],
            answerindex:"5",
            when(resp){
                return resp.selectedTypes == "2"

            }
        },
        

        
    ])
    let answerindex = "5" ;
    console.log("Quiz:",Quiz);
    if(Quiz.questions!=answerindex){
        console.log(chalk.redBright(`Your answer was wrong!`));
    
    

    }
    else{
        console.log(chalk.greenBright(`Your answer was correct!`));
        


    }; 
    const Myquiz = await inquirer.prompt([
    {

        name:"selectedTypes",
        type:"list",
        message:"solve the following questions",
        choices:[4,5],
    },
    {
        name:"questions",
        type:"list",
        Marks:10,
        message : "what is symbol of gold?",
        choices : ["Ag","Au","He"],
        Answer:"Au",
        when(resp){
            return resp.selectedTypes == "4"

        }
    },
    

    
])
let Answer = "Au"
console.log("Myquiz:",Myquiz);
if(Myquiz.questions!=Answer){
    console.log(chalk.redBright(`Your answer was wrong!`));
    

}
else{
    console.log(chalk.greenBright(`Your answer was correct! You passed`))
    


}
const myQuiz = await inquirer.prompt([
    {

        name:"selectedTypes",
        type:"list",
        message:"solve the following questions",
        choices:[5],
    },
    {
        name:"questions",
        type:"list",
        Marks:10,
        message : "What is national flower of Pakistan",
        choices : ["Jasmine","Tulip","Rose"],
        answers:"Jasmine",
        when(resp){
            return resp.selectedTypes == "5"

        }
    },
    

    
])
let answers = "Jasmine";
console.log("myQuiz:",myQuiz);
if(myQuiz.questions!=answers){
    console.log(chalk.redBright(`Your answer was wrong!You failed`));
    



}
else{
    console.log(chalk.greenBright(`Your answer was correct! You passed`));
    
}
const TotalMarks = user.Marks - resp.Marks;
console.log(`your result is${TotalMarks}`);

console.log("Quiz Ends");
const toRepeat = await inquirer.prompt([
    {
        name:"repeat",
        type:"confirm",
        message:"do you want to Exit?"

    }


])
if(toRepeat.repeat == true){
    continueExit = true;
}
















































