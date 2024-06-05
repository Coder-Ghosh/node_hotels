var fs=require('fs');
var os=require('os');

let user=os.userInfo();
console.log(user);
console.log(user.username);
const age=24;
const hola="good";
let clbck=()=>{
    console.log("Ok Done");
}
let sm=(a,b)=>{
   
    clbck();
    return (a+b);
}


module.exports={//import to another file
    age,
    hola,
    sm,
    clbck
}


