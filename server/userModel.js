const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({

    name:{
   type:String,
   require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
   



})

module.exports.userModel=mongoose.model("users",UserSchema);

module.exports.get=(email)=>{

   return this.userModel.find({email})
}