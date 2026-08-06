const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Quiz = require("./models/Quiz");
const quizzes = require("./data/quizzes");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("✅ MongoDB Connected");

    try {

        // Remove old questions
        await Quiz.deleteMany();

        // Insert new questions
        await Quiz.insertMany(quizzes);

        console.log(`🎉 ${quizzes.length} Questions Inserted Successfully`);

    } catch (error) {

        console.log(error);

    }

    mongoose.connection.close();

})
.catch((err) => console.log(err));