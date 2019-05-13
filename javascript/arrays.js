var arr = [1,2,3,4,5];
arr.push(6);// add item at end of arr collection
arr.unshift(0);// add item at begining of arr

var arr1 = [1,2,3,4,5];
var num1 = arr1.pop();
var num2 = arr1.shift();

var arr2 = [1,2,3,4,5,6,7];
var splicedArr = arr2.splice(2,0,10,10,10);
var arr3 = ['ravi', 'krishna', 'balaram'];
splicedArr3 = arr3.splice(2,0,'radhe');

var arr4 = [20,30,40,50];
var slicedArr4 = arr4.slice(1,3);

var cust1 = {
	name:'ravi',
	gender:'male'
}
var cust2 = {
	name:'krishna',
	gender:'male'
}
var cust3 = {
	name:'radhe',
	gender:'female'
}
var cust4 = {
	name:'balaram',
	gender:'male'
}

// assignment
var arr5 = [cust1,cust2,cust3,cust4];


var arr6 = [2,1,4,3,6,5,8,7,10,9];
arr6.sort(function(init,final){
	return init-final;
})

function run(cb){
	cb(10,20);
}
run(function(a,b){
	console.log(a+b);
})