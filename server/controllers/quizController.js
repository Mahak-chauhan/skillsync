const Quiz = require("../models/Quiz");

// Get All Quiz Questions
const getQuizQuestions = async (req, res) => {
    try {

       const quizzes = await Quiz.aggregate([
    {
        $sample: {
            size: 10
        }
    }
]);

        res.status(200).json(quizzes);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Add New Quiz Question
const addQuizQuestion = async (req, res) => {

    try {

        const quiz = await Quiz.create(req.body);

        res.status(201).json({
            message: "Question Added Successfully",
            quiz
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getQuizQuestions,
    addQuizQuestion
};