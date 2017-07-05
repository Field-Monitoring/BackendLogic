var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    jobTitle:   {
        type: String,
        required : true
    },
    salary : {
        type: String,
        required: false,
        default: ""
    },


    experience : {
        type: String,
        required: false,
        default:""
    },


    location : {
        type: String,
        required: true
    },


    skills: {
        type: Array,
        required: false,
        default:[]
    }



});

module.exports = mongoose.model('Job', jobSchema);