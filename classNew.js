//In javascript class,there is no variable and values. Only constructors and method's are allowed.class name will be started with capital letter.

//*Here we can create a similar many object using class .

class Person{
    constructor(name,age,salary){              //In constructor,we need to pass the parameter and used  this.parameter name in the construct.
        this.name=name;
        this.age=age;                       //here, this.propertyName is property of the method or constructor.
        this.salary=salary;
    }

    // printMe(){
    //     console.log(this.name,this.age,this.salary);
    // }
}

const person1=new Person('salman',20,20000) 
const person2=new Person('shahrukh',25,25000);   //Here,we create a new object of person class & put the value of parameter of constructor.
console.log(person1);
console.log(person2);