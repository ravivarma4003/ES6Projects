var prices=[10,20,30,12,34,23];

for(var i=0;i<prices.length;i++)
{
    console.log(prices[i]);
}

function printElement(element)
{
   console.log(element);
}
console.log("--------");
prices.forEach(printElement);

var names=["ravi","vathsav","pk","yaswa"];

names.forEach(printElement);

console.log("--------");

names.forEach(
    function (e)
    {
        console.log(e);
    }
)
console.log("--------");
prices.forEach((e)=>{
    console.log(e);
})