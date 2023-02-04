const mongoose = require("mongoose");

const jobPortalSchema = new mongoose.Schema({

    jobName: {
        type:String,
        minlength:1,
        maxLengh:30,
        required:true
    },
    jobDesc: {
        type:String,
        minlength:20,
        maxLengh:100,
        required:true
    },
    JobLocation:{
        type:String,
        minlength:5,
        maxlength:50,
        required:true
    },
    jobSalary: {
        type:Number,
        required:true
    },

});


const jopPortalSearch = mongoose.model("jopPortalSearch",jobPortalSchema);

module.exports.jopPortalSearch = jopPortalSearch;