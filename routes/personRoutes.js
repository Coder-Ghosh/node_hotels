const express=require('express');

const router=express.Router();

const Person=require('./../Models/Person');

router.post('/',async(req,res)=>{
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
router.get('/',async(req,res)=>{
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
router.get('/:name',async(req,res)=>{
    try
    {
       const worktype=req.params.name;
       const response=await Person.find({work:worktype});
       res.status(200).json(response);
          
             
    }
   catch(err)
   {
    console.log(err);
    res.status(500).json("Internal Error");
   }
})

//TO UPDATE DATA

router.put('/:id',async(req,res)=>{
    try{
           const dataId=req.params.id;
           const toUpdate=req.body;

           const Response=await Person.findByIdAndUpdate(dataId,toUpdate,{
            new:true,//Return the Updated Document
            runValidators:true//Run the Moongoose validaton
           })
           console.log('Data Updated');
           res.status(200).json(Response);
    }
    catch(err)
    {
       console.log({Error:"Sorry wrong input"});
       res.status(500).json(err)
    }
})

//To Delete

router.delete('/:del',async(req,res)=>{
    try{
        const Tobedel=req.params.del;

        const response=await Person.findByIdAndDelete(Tobedel);
        console.log('Data Deleted');
    }
    catch(err){
          console.log(err);
          res.status(500).json('Hey prabhu');
    }
})
/*router.get('/:nm',async(req,res)=>{
    try
    {
       const worktp=req.params.nm;
       if(worktp >= "20")
        {
          const age=await Person.find({age:worktp});
          res.status(200).json(age);
        }     
    }
   catch(err)
   {
    console.log(err);
    res.status(500).json("Internal Error");
   }
})*/

//Update purpose
router.put('/:id',(req,res)=>{

})

module.exports=router;