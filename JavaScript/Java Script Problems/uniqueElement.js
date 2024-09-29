var name1 = [1, 3, 5, 2, 4, 10, 3, 2, 4];
var unique = [];

for(var i = 0; i < name1.length; i++){
    var element = name1[i];
    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element);
    }
}
console.log(unique);