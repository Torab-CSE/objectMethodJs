function add(){
    console.log(4000000+1000000); 
}
console.log(1111111);
console.log(2222222);

// setTimeout(function(){
//     console.log("Break the point"); // we can use this using two parameters.that is function and set the time.
// },4000);
//setTimeout(add,10000); 
// when we use the setTimeout,It is working when all task is done.We can also fix the time.

setInterval(function(){
    console.log("Breaking News");
},2000)
console.log(3333333);
console.log(4444444);

//set interval is working or execute for specific time .