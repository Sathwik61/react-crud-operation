const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>console.log(" --> Connected to Db"))
.catch((e)=>{console.log(e)})

const UserSchema= mongoose.Schema({
    name:String,
    email:String
})

const model=mongoose.model('user',UserSchema)
module.exports=model;
