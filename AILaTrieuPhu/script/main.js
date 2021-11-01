// var listAllQuestion = [{
//         question: "What does HTML stand for?",
//         answers: [
//             "Home Tool Markup Language",
//             "How To Make Love",
//             "Hyperlinks and Text Markup Language",
//             "Hyper Text Markup Language",
//         ],
//         toAnswer: "Hyper Text Markup Language",
//     },
//     {
//         question: "Who is making the Web standards?",
//         answers: [
//             "Mozilla",
//             "Google",
//             "The World Wide Web Consortium",
//             "Microsoft",
//         ],
//         toAnswer: "The World Wide Web Consortium",
//     },
//     {
//         question: "Choose the correct HTML element for the largest heading?",
//         answers: ["<h1>", "<head>", "<h6>", "<heading>"],
//         toAnswer: "<h1>",
//     },
//     {
//         question: "Which of these elements are all <table> elements?",
//         answers: [
//             "<table><tr><td>",
//             "<table><tr><tt>",
//             "<thead><body><tr>",
//             "<table><head><tbody>",
//         ],
//         toAnswer: "<table><tr><td>",
//     },
//     {
//         question: "Inline elements are normally displayed without starting a new line?",
//         answers: ["True", "False", "I don't know", "..."],
//         toAnswer: "True",
//     },
//     {
//         question: "How can you make a numbered list?",
//         answers: ["<ul>", "<list>", "<dl>", "<ol>"],
//         toAnswer: "<ol>",
//     },
//     {
//         question: "How can you make a bulleted list?",
//         answers: ["<ul>", "<ol>", "<dl>", "<list>"],
//         toAnswer: "<ul>",
//     },
//     {
//         question: "What is the correct HTML for making a checkbox?",
//         answers: [
//             "<input type='checkbox'>",
//             "<input type='check'>",
//             "<checkbox>",
//             "<check>",
//         ],
//         toAnswer: "<input type='checkbox'>",
//     },
//     {
//         question: "What is the correct HTML element for playing audio files?",
//         answers: ["<mp3>", "<audio>", "<sound>", "<learn>"],
//         toAnswer: "<audio>",
//     },
//     {
//         question: "In HTML, onblur and onfocus are?",
//         answers: ["Event attributes", "Style attributes", "HTML elements", "..."],
//         toAnswer: "Event attributes",
//     },
//     {
//         question: "Graphics defined by SVG is in which format?",
//         answers: ["CSS", "HTML", "XML", "NSG"],
//         toAnswer: "XML",
//     },
//     {
//         question: "The HTML <canvas> element is used to?",
//         answers: [
//             "Draw graphics",
//             "Display database records",
//             "Manipulate data in MySQL",
//             "Create draggable elements",
//         ],
//         toAnswer: "Draw graphics",
//     },
//     {
//         question: "In HTML, which attribute is used to specify that an input field must be filled out?",
//         answers: ["Placeholder", "Validate", "Required", "Formvalidate"],
//         toAnswer: "Required",
//     },
//     {
//         question: "Which input type defines a slider control?",
//         answers: ["Controls", "Range", "Search", "Slider"],
//         toAnswer: "Range",
//     },
//     {
//         question: "Which HTML element is used to display a scalar measurement within a range?",
//         answers: ["<meter>", "<range>", "<measure>", "<gauge>"],
//         toAnswer: "<meter>",
//     },
//     {
//         question: "Which HTML element defines navigation links?",
//         answers: ["<navigation>", "<nav>", "<navigate>", "<navi>"],
//         toAnswer: "<nav>",
//     },
//     {
//         question: "Which HTML element is used to specify a header for a document or section?",
//         answers: ["<top>", "<head>", "<header>", "<section>"],
//         toAnswer: "<header>",
//     },
//     {
//         question: "What does CSS stand for?",
//         answers: [
//             "Computer Style Sheets",
//             "Colorful Style Sheets",
//             "Cascading Style Sheets",
//             "Creative Style Sheets",
//         ],
//         toAnswer: "Cascading Style Sheets",
//     },
//     {
//         question: "What is the correct HTML for referring to an external style sheet?",
//         answers: [
//             "<stylesheet>style.css</stylesheet>",
//             "<style src='style.css'>",
//             "<link rel='stylesheet' href='style.css'>",
//             "...",
//         ],
//         toAnswer: "<link rel='stylesheet' href='style.css'>",
//     },
//     {
//         question: "Where in an HTML document is the correct place to refer to an external style sheet?",
//         answers: [
//             "In the <head> section",
//             "At the end of the document",
//             "In the <body> section",
//             "...",
//         ],
//         toAnswer: "In the <head> section",
//     },
//     {
//         question: "Which HTML tag is used to define an internal style sheet?",
//         answers: ["<style>", "<css>", ",script>", "<meta>"],
//         toAnswer: "<style>",
//     },
//     {
//         question: "Which HTML attribute is used to define inline styles?",
//         answers: ["class", "font", "style", "attribute"],
//         toAnswer: "style",
//     },
//     {
//         question: "Which is the correct CSS syntax?",
//         answers: [
//             "body {color: black;}",
//             "{body:color=black;}",
//             "body:color=black;",
//             "{body; color: black;}",
//         ],
//         toAnswer: "body {color: black;}",
//     },
//     {
//         question: "How do you insert a comment in a CSS file?",
//         answers: [
//             "'this is a comment'",
//             "/* this is a comment */",
//             "// this is a comment",
//             "// this is a comment //",
//         ],
//         toAnswer: "/* this is a comment */",
//     },
//     {
//         question: "Which property is used to change the background color?",
//         answers: ["bgcolor", "background-color", "color", "..."],
//         toAnswer: "background-color",
//     },
//     {
//         question: "How do you add a background color for all <h1> elements?",
//         answers: [
//             "all.h1 {background-color:#FFFFFF;}",
//             "h1.all {background-color:#FFFFFF;}",
//             "h1 {background-color:#FFFFFF;}",
//             "...",
//         ],
//         toAnswer: "h1 {background-color:#FFFFFF;}",
//     },
//     {
//         question: "Which CSS property is used to change the text color of an element?",
//         answers: ["fgcolor", "text-color", "color", "..."],
//         toAnswer: "color",
//     },
//     {
//         question: "Which CSS property controls the text size?",
//         answers: ["font-size", "text-style", "font-style", "text-size"],
//         toAnswer: "font-size",
//     },
//     {
//         question: "What is the correct CSS syntax for making all the <p> elements bold?",
//         answers: [
//             "<p style='font-size:bold;'>",
//             "<p style='text-size:bold;'>",
//             "p {text-size:bold;}",
//             "p {font-weight:bold;}",
//         ],
//         toAnswer: "p {font-weight:bold;}  ",
//     },
//     {
//         question: "How do you display hyperlinks without an underline?",
//         answers: [
//             "a {underline:none;}",
//             "a {text-decoration:no-underline;}",
//             "a {text-decoration:none;}",
//             "a {decoration:no-underline;}",
//         ],
//         toAnswer: "a {text-decoration:none;}",
//     },
//     {
//         question: "How do you make each word in a text start with a capital letter?",
//         answers: [
//             "text-style:capitalize",
//             "transform:capitalize",
//             "You can't do that with CSS",
//             "text-transform:capitalize",
//         ],
//         toAnswer: "text-transform:capitalize",
//     },
// ];
// var currentQuestion = 0;


// const contentQuestion = document.querySelector(".content__question");

// const question = document.getElementById("question");
// const listAnswerCard = document.querySelectorAll(".answer__card");
// const listAnswer = document.querySelectorAll(".answer");

// var initGameMoneyInter;
// var answerRight = "";
// var indexAnswerRight = -1;
// var clickSubmit = false;
// var listQuestion = [];
// var listIndexQuestion = [];
// const listMoneys = [
//     "200",
//     "400",
//     "600",
//     "1.000",
//     "2.000",
//     "3.000",
//     "6.000",
//     "10.000",
//     "14.000",
//     "22.000",
//     "30.000",
//     "40.000",
//     "60.000",
//     "85.000",
//     "150.000",
// ];

// function initGame() {
//     let index = 15;
//     let count = 1;
//     initGameMoneyInter = setInterval(function() {
//         index--;
//         if (index >= 0) {
//             cardMoney[index].classList.add("money__current");
//             if (index < 14) {
//                 cardMoney[index + 1].classList.remove("money__current");
//             }
//         } else if (count > 0) {
//             count--;
//             index = 14;
//             cardMoney[14].classList.add("money__current");
//             cardMoney[0].classList.remove("money__current");
//         } else {
//             cardMoney[0].classList.remove("money__current");
//             return;
//         }
//     }, 200);
// }

// function getListQuestion() {
//     for (let i = 0; i < 16; i++) {
//         let index = Math.floor(Math.random() * listAllQuestion.length);
//         if (listIndexQuestion.indexOf(index) > -1) {
//             i--;
//             continue;
//         }
//         listIndexQuestion.push(index);
//         listQuestion.push(listAllQuestion[index]);
//     }
// }

// function showQuestion(index) {
//     let objCurrentQuestion = listQuestion[index];

//     // shuffe all answer in a question
//     // C1:
//     objCurrentQuestion.answers.sort((a, b) => 0.5 - Math.random());

//     // show text
//     question.textContent = objCurrentQuestion.question;
//     listAnswer.forEach((answer, i) => {
//         answer.textContent = objCurrentQuestion.answers[i];
//         if (answer.textContent === objCurrentQuestion.toAnswer) {
//             answerRight = answer.parentNode;
//             indexAnswerRight = i;
//         }
//     });
// }



// window.onload = function() {
//     initGame();
//     getListQuestion();

// };