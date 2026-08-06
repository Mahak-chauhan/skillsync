const express = require("express");

const router = express.Router();

const {
    getQuizQuestions,
    addQuizQuestion
} = require("../controllers/quizController");

router.get("/", getQuizQuestions);

router.post("/", addQuizQuestion);

module.exports = router;