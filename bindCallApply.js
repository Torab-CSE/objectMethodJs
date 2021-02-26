//1.When a function is used in the object then we need to use 'bind,call or apply' method . That is bind the function for that proper object & return the new function.So,get the result have to use variable and call the Variable function.
//Prb:we have to call the return variable function,this is the problem of bind.

//2.Solution of the prob,we have to use Call & Apply method instead of bind method.Because don't need to call the return function,because it give us return value.

//3.Difference Call & Apply :Call & Apply methods are same without one .The one is for arguments of function.


// function greetings(){
//     console.log('Congratulations...'+ this.name) // here ,this is global and it indicate the all name.
// };

// const person1={
//     name:"salman Khan",
//     age:22
// }
// const res=greetings.bind(person1);
// //console.log(res);   //print the return function .
// res();  

// const person2={
//     name:"sharukh",
//     age:50
// }        
// greetings.call(person2);

// const person3={
//     name:'amir',
//     age:40
// }
// greetings.apply(person3);

function add(a,b){
    const value=(a+b)*this.b;
    console.log(value);
}

// const container1={       //value of c is used in function through  call method.
//     c:10,
// }
// var result1=add.call(container1,2,3);



const container2={
    b:5,
}
add.apply(container2,[2,3])    //When we use the apply method ,we have to use the array for the value of arguments or parameter.
