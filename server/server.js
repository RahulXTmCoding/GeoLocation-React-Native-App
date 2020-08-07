const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const http=require('http')
const app=express();

const controller=require('./userController')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://rahul_bot1:Rahulsingh@8@cluster0-dzbde.mongodb.net/test',{useNewUrlParser: true})
const db=mongoose.connection;
if(!db)
{
    console.log("unable to connect to database");
}
else{
    console.log("database Connection Successfull");
}

app.use('/user',controller);
app.get('/',(req,res)=>{
    res.send("running")
})
const port = 3000;

const server=app.listen(port,()=>{
    console.log("listening at :"+port)
})