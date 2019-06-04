// let , const , lambda or arrow function
var num = 10;
let num1 = 20;
const num2 = 19;
function test(){
    // console.log(num2);
    let num1 = 15;
    // num2 = 35;
    // const num2 = 35;
    if (true) {
        console.log(num2);
        // var num1 = 50;
    }
    console.log(num1);
}
test()
const obj = {
    name:"krishna"
}
// obj = {
//     name:"krishna"
// }
const arr = [1,2,3,4]
arr.push(5);
arr.splice(1,1,10);
// arr = [1,2,3,4]
obj.name  = "radhekrishna";
console.log(obj.name);

console.log(num2);
// for(let i = 0; i < 10 ; i = i + 1){
//     setTimeout(function(){
//         console.log(i)
//     },2000)
    
// }
var sum = (a,b) => a+b;

console.log(sum(2,4));
var test = (a,b) => {
    this.name = "ravi";
    console.log(this);
}
// var user = new test();
var obj1 = {
    name:"krishna",
    testFn : ()=>{
        console.log(this);
        var fnInsideTestFn = () => {
            console.log(this);
        }
        fnInsideTestFn();
    },
    test2Fn: function(){
        console.log(this);
        var fnInsideTestFn = () => {
            console.log(this);
        }
        fnInsideTestFn();
    }
}
obj1.testFn();
obj1.test2Fn.call(obj);
console.log(this);
var test3 = () =>{
    console.log(this);
}
