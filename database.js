const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        max: 40,
        required: true
    },
    others: {
        hobby: [String, String],
        career: String
    }
});

const friend = new mongoose.model("friend", friendSchema);

module.exports = friend