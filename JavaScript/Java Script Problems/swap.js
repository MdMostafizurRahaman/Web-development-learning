var a = 5;
var b = 7;
console.log("Before swap: a = ", a, "b = ", b);
//  var temp = a;
//  a = b;
//  b = temp;
//  console.log("After swap: a = ", a, "b = ", b);

[a, b] = [b, a];
console.log("Before swap: a = ", a, "b = ", b);

var maxi = Math.max(a, b);
console.log("Max: ", maxi);


var marks = [10, 20, 80, 23, 50, 80];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}
console.log(max);
