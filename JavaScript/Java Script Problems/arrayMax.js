var marks = [10, 20, 30, 40, 5, 50];
var maxi = marks[0];

for(var i = 0; i < marks.length; i++){
    if(maxi < marks[i]){
        maxi = marks[i];
    }
}
console.log("Max:" +maxi);