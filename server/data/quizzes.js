const javaQuestions = require("./javaQuestions");
const javascriptQuestions = require("./javascriptQuestions");
const dbmsQuestions = require("./dbmsQuestions");
const osQuestions = require("./osQuestions");
const cnQuestions = require("./cnQuestions");
const htmlCssQuestions = require("./htmlCssQuestions");
const aptitudeQuestions = require("./aptitudeQuestions");

const quizzes = [
    ...javaQuestions,
    ...javascriptQuestions,
    ...dbmsQuestions,
    ...osQuestions,
    ...cnQuestions,
    ...htmlCssQuestions,
    ...aptitudeQuestions
];

module.exports = quizzes;