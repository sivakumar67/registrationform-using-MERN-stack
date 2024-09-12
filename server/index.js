const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cmodel = require('./models/Register')



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud')

app.post('/user',(req,res)=>{
    const {name,email,password} = req.body;
    cmodel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json({ message: "Already Exist.." });
        }
        else{
            cmodel.create({name:name,email:email,password:password})
            .then(result => {
                res.json({ message: "Account created.." });
            })
            
            .create(err=>res.json(err))
            
        }
    }).catch(err=>res.json(err))

})

app.listen(3001,()=>
{
    console.log("server is running");
})



