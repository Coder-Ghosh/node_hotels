/*let add=(a,b)=>{return a+b;}//Arrow function

console.log(add(20,30));
(function(){
    console.log("Good night")
})();

function callback()
{
    console.log("This is callback function");
}
let add=(a,b,callback)=>{
    console.log(a+b);
    callback();
}
add(10,20,callback);*/

let pkg=require("./Pkg.js");
console.log(pkg.age+""+pkg.hola);
let val=pkg.sm(10,20);
console.log(val);
