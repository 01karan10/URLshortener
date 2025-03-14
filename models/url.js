    const mongoose = require('mongoose');

    const URLSchema = new mongoose.Schema({
        shortId: {
            type: String,
            require: true,
            unique: true,
        },
        originalURL: {
            type: String,
            require: true,
        },
        visitHistory : [{ timestamp: { type: Number } }]
    },
    {timestamps: true}
    );

    const URL = mongoose.model("url", URLSchema);

    module.exports = URL;