//In object,the function is value of property then using this.propertyName,we got the value of that property of object in function. 
const person={
    firstName:'salman',
    lastName:'khan',
    salary:25000,
    getFullName:function(){
        const fullName=this.firstName+' '+this.lastName;
        return fullName;
    },
    chargeBill:function(amount){
        this.salary=this.salary-amount;     
        return this.salary;
    }
}
const name=person.getFullName();
console.log(name);

// const salary=person.chargeBill(2000);
// console.log(salary);
person.chargeBill(5000);
person.chargeBill(3000);
console.log(person.salary);

