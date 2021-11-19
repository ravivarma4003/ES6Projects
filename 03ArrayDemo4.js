let arr=[1,3,6,2,5];

function process(a,b)
{
    return a+b;
}
function minProcess(a,b)
{
    if(a>b)
    {return b;}
    else
    return a;
}
function maxProcess(a,b)
{
    if(a>b)
    {return a;}
    else
    return b;
}

var sum = arr.reduce(process);
var min=arr.reduce(minProcess);
var max= arr.reduce(maxProcess);

console.log(`sum : ${sum}, min : ${min}, max : ${max}`);

var names=["ravi","vathsav","pk","yaswa","Kavya","varma"];

function minLength(a,b)
{
    if(a.length>b.length)
    {return b;}
    else
    return a;
}
function maxLength(a,b)
{
    if(a.length>b.length)
    {return a;}
    else
    return b;
}

function lengthCount(a,b)
{
    return a+b.length;
}
var totalLength = names.reduce(lengthCount,0);
console.log(totalLength);

var minimum = names.reduce(minLength);
var maximum = names.reduce(maxLength);
console.log(minimum);
console.log(maximum);


let emps=[
    {
        "id":101,
        "name":"Shalini",
        "salary":5000
    },
 
    {
     "id":102,
     "name":"Pooja",
     "salary":7000
 },
 
 {
     "id":103,
     "name":"Uma",
     "salary":4000
 },
 
 {
     "id":104,
     "name":"Reshmi",
     "salary":2000
 },
 
 ]

 
 function minimumPaid(a,b)
 {
     if(a.salary>b.salary)
     {
         return b;
     }
     else
     return a;
 }

 var minSalary = emps.reduce(minimumPaid);
 var maxSalary = emps.reduce((a,b)=>{
    if(a.salary>b.salary)
     {
         return a;
     }
     else
     return b; 
 });
 console.log(minSalary.name);
 console.log(maxSalary.name);