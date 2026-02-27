const mongoose = require('mongoose')

async function connectDB() {
    {
        await mongoose.connect('mongodb://localhost:27017/completebackend')
        console.log("Connected to Database");

    }
}

module.exports = connectDB;