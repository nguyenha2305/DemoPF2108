class options {
    constructor(option1, option2, option3, option4) {
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
}
class questions {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}
const questions1 = new questions("What does CSS stand for?", new options(
    "Computer Style Sheets",
    "Colorful Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Sheets"), "Cascading Style Sheets");
const questions2 = new questions("What does CSS stand for?", new options(
    "Computer Style Sheets",
    "Colorful Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Sheets"), "Cascading Style Sheets");