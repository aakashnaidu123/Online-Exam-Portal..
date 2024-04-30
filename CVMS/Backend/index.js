const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

//obj for express
const app=new express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.7a7xqb7.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('sec15db');
const col = db.collection('details');

app.get('/home',(req,res)=>{
    res.send("home page");
}) 
app.post('/insert',async (req,res)=>{
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password,5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send("successfully submitted");
})

app.listen(8081);
console.log("Server Is Running.......");



app.get('/showall',async(req,res)=>{
    const result =await col.find().toArray();
    res.send(result);
})

app.post('/check',async(req,res)=>{
    const result1 =await col.findOne({'firstName':req.body.un});
    req.body.pw = await bcrypt.hash(req.body.pw,5);
    const result =await col.findOne({'firstName':req.body.un});
    if(result1.password == req.body.pw){
    res.send("Login Success");
}
else{
res.send("Login Success");
}
})

app.post('/update',async(req,res)=>{
    const result2 =await col.findOne({'firstName':req.body.un});
    if(result2.firstName == req.body.un){
    if(result2.password == req.body.pw){
        col.updateOne({password:req.body.pw},{$set:{password:req.body.pwd}});
        res.send("New password updated succesfully");
    }
}
else{
    res.send("Updation failed");
}

})


app.post('/delete',async(req,res)=>{
    const result2 =await col.findOne({'firstName':req.body.un});
    if(result2.firstName == req.body.un){
        col.deleteOne({firstName:result2.firstName});
        res.send("Deleted succesfully");
}
else{
    res.send("Deletion failed");
}

})