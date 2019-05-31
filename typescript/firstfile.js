// let , const , lambda or arrow function
var num = 10;
let num1 = 20;

function test(){
    console.log(num1);
}
test()
for(let i = 0; i < 10 ; i = i + 1){
    setTimeout(function(){
        console.log(i)
    },2000)
    
}
