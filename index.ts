import inquirer from "inquirer";

let Quiz = await inquirer.prompt([
  {
    type: "list",
    name: "question1",
    message: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
  },
  {
    type: "list",
    name: "question2",
    message: "What is the capital of Germany?",
    choices: ["Paris", "London", "Berlin", "Rome"],
  },
  {
    type: "list",
    name: "question3",
    message: "What is the capital of Italy?",
    choices: ["Paris", "London", "Berlin", "Rome"],
  },
  {
    type: "list",
    name: "question4",
    message: "What is the capital of Spain?",
    choices: ["Paris", "London", "Berlin", "Rome","Madrid"],
  },
  {
    type: "list",
    name: "question5",
    message: "What is the capital of Portugal?",
    choices: ["Paris", "London", "Berlin", "Rome","Lisbon"],
  },
]);

let score = 0;

switch (Quiz.question1) {
  case "Paris":
    console.log("1. Correct");
    ++score;
    break;
  default:
    console.log("1. Incorrect");
}
switch (Quiz.question2) {
  case "Berlin":
    console.log("2. Correct");
    ++score;
    break;
  default:
    console.log("2. Incorrect");
}
switch (Quiz.question3) {
  case "Rome":
    console.log("3. Correct");
    ++score;
    break;
  default:
    console.log("3. Incorrect");
}
switch (Quiz.question4) {
  case "Madrid":
    console.log("4. Correct");
    ++score;
    break;
  default:
    console.log("4. Incorrect");
}
switch (Quiz.question5) {
    case "Lisbon":
        console.log("5. Correct");
        ++score;
        break;
        default:
            console.log("5. Incorrect");
            }


        console.log("Your score is " + score + "/5");


// switch(Quiz.question1){
//     case "Paris":
//         console.log("Correct")
//         break;
//         // case "London":
//         //     console.log("Incorrect")
//         //     break;
//         //     case "Berlin":
//         //         console.log("Incorrect")
//         //         break;
//         //         case "Rome":
//               ++score;
//             console.log("Incorrect")

// }
