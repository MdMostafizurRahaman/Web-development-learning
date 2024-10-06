function welComeGuest(name, greetHandler){
    greetHandler(name)
}

function greetMorning(name){
    console.log('Good Morning ' + name)
}
function greetEvening(name){
    console.log('Good Evening ' + name)
}
function greetAfternoon(name){
    console.log('Good Afternoon ' + name)
}

const actorName = 'Rakib Hasan'
welComeGuest(actorName, greetAfternoon)
welComeGuest("Asif", greetMorning)
welComeGuest('Akib', greetEvening)
