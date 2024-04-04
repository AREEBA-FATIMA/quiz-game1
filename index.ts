#!/usr/bin/env node
import inquirer from "inquirer";

let score = 0;

let quiz = await inquirer.prompt([
    {
        name: "userName",
        message: "Please enter your name",
        type: "input"
    },
    {
        name: "confirmation",
        message: "Are you ready to play the quiz game?",
        type: "confirm"
    }
]);

if (quiz.confirmation) {
    console.log("Let's start the game");

    let questions = {
        "Islamic History": [
            {
                question: "What was the name of the battle where Khalid ibn al-Walid led the Muslim forces to victory against the Byzantine Empire in 636 CE?",
                choices: ["a) Battle of Uhud", "b) Battle of Badr", "c) Battle of Yarmouk", "d) Battle of Khandaq"],
                answer: "c) Battle of Yarmouk"
            },
            {
                question: "Who was the first female martyr in Islam, known for her courage during the Battle of Uhud?",
                choices: ["a) Khadijah bint Khuwaylid", "b) Aisha bint Abu Bakr", "c) Sumayyah bint Khayyat", "d) Fatimah bint Muhammad"],
                answer: "c) Sumayyah bint Khayyat"
            },
            {
                question: "Who was the first caliph (successor) of Prophet Muhammad in Islam?",
                choices: ["a) Umar ibn al-Khattab", "b) Abu Bakr", "c) Ali ibn Abi Talib", "d) Uthman ibn Affan"],
                answer: "b) Abu Bakr"
            },
            {
                question: "Which battle is known as the 'Mother of all Battles' in Islamic history?",
                choices: ["a) Battle of Uhud", "b) Battle of Badr", "c) Battle of Khandaq (Trench)", "d) Battle of Hunayn"],
                answer: "b) Battle of Badr"
            },
            {
                question: "What is the name of the treaty that Prophet Muhammad signed with the tribes of Medina, establishing peace and cooperation among them?",
                choices: ["a) Treaty of Hudaybiyyah", "b) Treaty of Versailles", "c) Treaty of Najran", "d) Constitution of Medina"],
                answer: "d) Constitution of Medina"
            }
        ]
    };

    let topicQuestions = questions["Islamic History"];

    for (let i = 0; i < topicQuestions.length; i++) {
        let question = topicQuestions[i];
        let userAnswer = await inquirer.prompt([
            {
                name: "answer",
                message: question.question,
                type: "list",
                choices: question.choices
            }
        ]);
        if (userAnswer.answer === question.answer) {
            console.log(`Question ${i + 1}: Correct Answer`);
            score++;
        } else {
            console.log(`Question ${i + 1}: Wrong Answer`);
        }
    }
    console.log(`${quiz.userName}, Your score is ${score} out of 5`);

} else {
    console.log("Okay, maybe next time!");
}

