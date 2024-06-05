const jsString='{"name":"souvik","age":"22","dob":"07/05/2002"}';
console.log(jsString);    //Here jsString is the json string
console.log(typeof(jsString));
const jsob=JSON.parse(jsString);   //Here convert json String to javascript object
console.log(typeof(jsob));
console.log(jsob.dob);

const jsstr=JSON.stringify(jsob);
console.log(jsstr);
console.log(typeof(jsstr));