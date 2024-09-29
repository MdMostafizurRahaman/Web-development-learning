var age = [15, 17, 20];
console.log(age);
console.log("Third: " +age[2]);
age[2] = 100;
console.log(age);
console.log(age.indexOf(100));

age.push(30);
age.push(300);
console.log(age);
console.log(age.length);

age.pop();
console.log(age);
console.log(age.length);


var tealine = ["Abul", "babul", "Cabul"];
console.log(tealine);
tealine.push("Dabul");
console.log(tealine);
tealine.shift(); // remove from first
console.log(tealine);
tealine.unshift("Rakib", "Bablu");// add first
console.log(tealine);

var part = tealine.slice(2, 4);
console.log(part);

