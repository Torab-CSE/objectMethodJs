
const person1={
    name:"salman",
    age:20,
    salary:25000,
    presentBalance:function(amount){
        console.log(this);
        this.salary=this.salary-amount;
        return this.salary;
    }
}
console.log(person1.presentBalance(2000));

const person2={
    name:"shoyeb",
    age:28,
    salary:15000
}
const result2=person1.presentBalance.bind(person2);
console.log(result2(3000));


const person3={
    name:"malik",
    age:29,
    salary:10000
}
var result3=person1.presentBalance.call(person3,1000); //using call method
console.log(result3);
