class Employee1{
    constructor(n,a,b)
    {
    this.name=n;
    this.age=a;
    this.basic=b;
    }
    computeAllowance(){
        return this.basic *0.20;
    }
    taxComputation(){
        return this.basic*0.10;
    }
}
class Manager extends Employee1{
    constructor(n,a,b,ec)
    {
        super(n,a,b);
        this.employeeCount = ec;
    }
    printEmployeeCount(){
        console.log(this.employeeCount);
    }
    taxComputation(){
        return this.basic*0.05;
    }
}
var m = new Manager("ravi",22,10000,12);
console.log(m);
m.printEmployeeCount();
console.log(m.taxComputation());