const start=new Date();
let sum=0;
for(i=0;i<1000000;i++){
    sum++;
}
const end=new Date();
console.log(end-start);