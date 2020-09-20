const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname  :String,
    password : String,
    email : String,
    role : {type: Number , default:0}
})
module.exports = mongoose.model('User-test',UserSchema)