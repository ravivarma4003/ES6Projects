// ES5

function Employee(n,a,b)
{
    this.name=n;
    this.age=a;
    this.basic=b;
    this.computeAllowance=()=>{
        return this.basic *0.20;
    }
    this.taxComputation=()=>{
        return this.basic*0.10;
    }
}
let e = new Employee("varma",21,10050);
console.log(e.computeAllowance());
console.log(e.taxComputation());

// ES6
class Employee1{
    constructor(n,a,b)
    {
    this.name=n;
    this.age=a;
    this.basic=b;
    }
    computeAllowance(){
        console.log(this,28)
        return this.basic *0.20;
    }
    taxComputation(){
        //console.log(this.computeAllowance)
        return this.basic*0.10;
    }
}
let e1 = new Employee1("ravi",21,10000);
console.log(e1,37)
console.log(e1.computeAllowance());
//console.log(e1.taxComputation());