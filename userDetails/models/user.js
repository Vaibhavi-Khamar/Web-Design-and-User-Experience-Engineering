const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const User = mongoose.model('User', userSchema);
module.exports = { User }

// const bcrypt = require('bcrypt')
// let SALT = 10;

// userSchema.pre('save',function(next){
//     var user = this;
//     if(user.isModi)
// })