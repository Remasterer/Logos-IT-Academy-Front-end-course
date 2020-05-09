class Worker{
    constructor(fname,sname,rate,days){
     [this.name,this.surname,this.rate,this.days] = arguments;
    }
    getSalary(){
        return this.days * this.rate;
    }
}
let worker1 = new Worker('Ivan','Ivanov',10,31),worker2= new Worker('Michael','Semkiv',10,51);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary()+'$');

console.log('Сума двох зарплат ' + (worker1.getSalary()+worker2.getSalary())+'$');