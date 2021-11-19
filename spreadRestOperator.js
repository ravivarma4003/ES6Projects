let numbers=[1,3,4,5.0];

let cities=["pune","chennai","hyd",...numbers,"Bangalore"];// spread operator

console.log(cities);

console.log('--------');

function multiply(a,b)
{
    console.log(a*b);
}

multiply(...numbers); // rest operator

console.log('--------');

var arr1=[1,2,3,4];
var arr2= [...arr1];
console.log(arr2);

console.log("------");

 print("Country","India","Britain","Russis","USA");

 function print(prefix,...elements)
 {
     const arr = [1,2,...elements]
     console.log(arr)
     //elements.forEach((e)=>{console.log(`${prefix} :${e}`)})
 }