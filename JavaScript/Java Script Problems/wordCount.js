var speech = "I am Rakib. I am a software engineer";

var cnt = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        cnt++;
    }
}
console.log(cnt + 1);