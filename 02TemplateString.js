const name="ravi";
const age=22;

console.log(`my name is ${name} and age is ${age}`);

let Student =
 {
     name:"piyush",
     email:"piyush12@gmail.com",
     showDetails: function(){
         console.log(`student name is ${this.name} and student email is ${this.email}`);
     }
 }
Student.showDetails();