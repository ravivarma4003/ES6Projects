var prices=[10,20,30,12,34,23];

function above20Finder(e)
{
   if (e>20){
       return true;
   }
   else
   return false;
}

var above20Items = prices.filter(above20Finder);
console.log(above20Items);

var names=["ravi","vathsav","pk","yaswa","Kavya","varma"];

var lengthyNames = names.filter((e)=>{
    if(e.length>4)
    {
        return true;
    }
    else
    return false;
})
console.log(lengthyNames);