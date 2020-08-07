const {userModel,get} = require('./userModel')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const {secret} = require('./const')
const login=async (req,res)=>{

    const {email,password}=req.body;

    const user=await userModel.findOne({email})

    if(!user)
    {
        res.json({success:false,error:'Email or Password Wrong'});
        return;
    }
    console.log(user);
     console.log(user.password+"  "+password)
    if(user.password!==password)
    {
        res.json({success:false,error:'Wrong Password'});
        return;
    }

var ro=buildUserRO(user)
    res.json({success:true,user:ro});


}
function generateJWT(user)
{
    let today = new Date();
      let exp = new Date(today);
      exp.setDate(today.getDate() + 90);
    return (jwt.sign({
        id:user._id,
        name:user.name,
        email:user.email,
        exp:exp.getTime()/60
    },secret));
}

function  buildUserRO(user) {
    const userRO = {
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user),
    };

    return  userRO;
}

const register=async (req,res)=>{

    const {name,email,password}=req.body;

    if(!(name && email && password ))
    {
        res.json({success:false,error:"Missing Required Agument"})
        return;
    }

    const Uniqueuser=await userModel.find({email});
     
    if(Uniqueuser==[])
    {
        res.json({success:false,error:"Email Already Registered"});
        return
    }
    var user=new userModel();
    user.name=name;
    user.email=email;
    user.password=password;
    
     
    user.save();
     var ro=buildUserRO(user)
    res.json({success:true,user:ro});

}

module.exports={login,register};
