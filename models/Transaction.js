const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["income", "outgoing"],
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Transaction", TransactionSchema);