const express = require('express')
const app = express()
const db=require('./db');
//const Person=require('./Models/Person');

const bodyParser=require('body-parser');
app.use(bodyParser.json());


//To Insert records in a database....
/*
app.post('/person',async(req,res)=>{
    try{
    const data=req.body //Assuming that req.body contains the data
   
    const newPerson=new Person(data);//Directly fill data

     const ret=await newPerson.save();
     console.log('Data Saved succesfully');
     res.status(200).json(ret);
       
    }
    catch(err)
    {
        console.log('Error saving person:',err);
        res.status(500).json({error:'Internal error'})
    }
})
//To fetch data from database
app.get('/person',async(req,res)=>{
    try{
        const data=await Person.find();
        
        console.log('Data fetched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.warn(err);
        res.status(500).json("Internal Server Error");
    }
})
//To fetch specific data from database
app.get('/person/:name',async(req,res)=>{
    try
    {
       const worktype=req.params.name;
       if(worktype=='chef' || worktype=='manager' || worktype =='waiter'||worktype == "20")
        {
         // const response=await Person.find({work:worktype});
          const age=await Person.find({age:worktype});
          //res.status(200).json(response);
          res.status(200).json(age);
        }     
    }
   catch(err)
   {
    console.log(err);
    res.status(500).json("Internal Error");
   }
})
*/

app.get('/', function (req, res) {   //get() only cand send the response to the client no database interaction
  res.send('You are a NOOB')
})
app.get('/Free',(req,res)=>{
    res.send("What the hell!!!");
})

app.get('/Need_Food',(dao,nao)=>{
    let food={
        Name:"Idli",
        chutney:true,
        sambar:true
    }
    nao.send(food)
  
})
app.listen(3000,()=>{
    console.log("Yay!! Server is Live");
})
//import router files
const personRoutes=require('./routes/personRoutes');
 //Use routers

 app.use('/person',personRoutes);
