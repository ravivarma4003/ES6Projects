var findSquare =(a)=>{
    return a*a;
}
var findSquare1 =(a)=>
              a*a;
var findSquare2 =a=>a*a;// ES6
// ES5
function Employee(a,b){
    this.name = a;
    this.age=b;
    var self = this;
    function showDetails()
    {
        console.log(self.name+":"+self.age);
    }
     showDetails();
}
Employee("varma",21);
function Employee1(a,b){
    this.name = a;
    this.age=b;
    var showDetails=()=>
    {
        console.log(this)
        console.log(this.name+":"+this.age);
    }
   showDetails();
}
Employee1("ravi",22);