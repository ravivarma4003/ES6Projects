var names=["ravi","vathsav","pk","yaswa"];

function convert(e)
{
    return e.toUpperCase();
}

var upperCaseNames = names.map(convert);

console.log(upperCaseNames);

var numbers = [1,2,3,4];

function square(e)
{
    return e*e;
}

var squareNumbers = numbers.map(square);

console.log(squareNumbers);