const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    blurb: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    },
    // for commenting of articles
    note: {
        type: Schema.Types.ObjectId,
        ref: "note"
    }   
});

// create model from schema
var article = mongoose.model("Article", articleSchema);

// export created model
module.exports = article;