
const person={
    firstName:"salman",
    lastName:"khan",
    getFullName:function(){
        return 'Mr.'+ this.firstName+ " "+this.lastName; //Sometimes this keyword used in different object .
    }
}

const person1={
    firstName:"AMIR",
    lastName:"KHAN",
}
person1.getFullName=person.getFullName; //if i call a function then the value of this is left side of the object or anything.

console.log(person.getFullName());
console.log(person1.getFullName());