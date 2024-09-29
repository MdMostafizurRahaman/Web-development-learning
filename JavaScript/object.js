var std = {id: 121, phone: 1517, name:"Rakib"};
std.play = "cricket";
console.log(std);

var phn1 = std.phone;
console.log(phn1);
var phn2 = std["phone"];
console.log(phn2);
var stdphn = "phone";
var phn3 = std[stdphn];
console.log(phn3);

//update
std.phone = 2327;
console.log(std.phone);
std["phone"] = 8887;
console.log(std.phone);
std[stdphn] = 9999;
console.log(std.phone)