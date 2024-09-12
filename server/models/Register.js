const mongoose = require('mongoose');

const Collectionschema =  new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

const model = mongoose.model("user",Collectionschema);
module.exports = model;