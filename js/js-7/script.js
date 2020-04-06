let person = {
  firstName : "Ivan",
  secondName : "Ivanov",
  showData(){
    console.log(`First name - ${this.firstName} , Second name - ${this.secondName}`);
  }
}
let newPerson = Object.assign({},person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
person.showData();
newPerson.showData();

let MyMath ={
  a:5,
  b:2,
  sum(){
    console.log(this.a+this.b);

  },
  multiplication(){
    console.log(this.a * this.b);
  },
  division() {
    console.log(this.a / this.b);
  },
  subtraction() {
    console.log(this.a - this.b);
  }
}
MyMath.sum();
MyMath.multiplication();
MyMath.division(); 
MyMath.subtraction(); 