const express = require('express')
const app=express();
const cors = require('cors')
const model=require('./schema/Schema');
// const { mongoose } = require('mongoose');


app.use(express.json())
app.use(cors())

app.post('/insert',async(req,res)=>{
    const {name,email}=req.body
    // console.log(name, email)
    const cus= await model.findOne({email});
    if(cus){
        res.status(201).send({msg:"User exists !!"});
        return;
    }
    // console.log(cus); 
    try{

        const us=new model({
            name:name,
            email:email
        })   
       await us.save()
       res.status(201).send({msg:"successfull registration"})
    }catch(e){
        console.log(e)
        res.status(201).send({msg:"retry again error happened!"})
    }

})


app.post('/delete',async(req,res)=>{
    const {name,email}=req.body
   try{

       const cus= await model.findOne({email});
       if(!cus){
           res.status(201).send({msg:`user not found  !! `});
        return;
       }
       else if (cus.email==email){
           await model.deleteOne({email:email});
           res.status(201).send({msg:`${email} user deleted !! `});
           return;
        } 
        
        // res.status(201).send({msg:"successfull registration"})
    
    }catch(e){
        console.log(e)
        res.status(201).send({msg:"retry again error happened!"})
    }

})



app.post('/update',async(req,res)=>{
    const {name,email}=req.body
   try{

       const cus= await model.findOne({email});
       if(!cus){
           res.status(201).send({msg:`user not found  !! `});
        return;
       }
       else if (cus.email==email){
           await model.updateOne({email:email},{ $set: {name: name, email: email }});
           res.status(201).send({msg:`${email} user Updated !! `});
           return;
        } 
        
        // res.status(201).send({msg:"successfull registration"})
    
    }catch(e){
        console.log(e)
        res.status(201).send({msg:"retry again error happened!"})
    }

})

app.get('/users', async (req, res) => {
    try {
        const users = await model.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(5000,()=>console.log(`http://localhost:5000`))