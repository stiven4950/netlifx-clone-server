const mongoose = require("mongoose");

const hackSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            maxlength : 200,
            default:''
        },
        password : {
            type : String,
            maxlength : 200,
            default:''
        },
    },

    { timestamps : true }
);

module.exports = mongoose.model('hack', hackSchema);