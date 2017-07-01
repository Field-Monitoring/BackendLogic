var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:   {
        type: String,
        required : true
    },
    password : {
        type: String,
        required: true
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    console.log("cool");
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);