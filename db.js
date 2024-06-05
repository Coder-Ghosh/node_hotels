const { default: mongoose } = require('mongoose');
const moongo=require('mongoose');

//define the MongoDB connection URL

const mongoURL='mongodb://127.0.0.1:27017/Hotels'

mongoose.connect(mongoURL,{useNewUrlParser:true,
    useUnifiedTopology:true
});

//Get default connection
//Moongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected To MongoDB Server");
})

db.on('disconnected',()=>{
    console.log("MongoDB Disconnected");
})

//Export the Database Connection
module.exports=db;
