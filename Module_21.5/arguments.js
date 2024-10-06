function getFullNme(firstName, lastName){
    const arg = [...arguments].join(' ')
    console.log(arg)
}

const name = getFullNme('Rakib', 'Sakib', 'Ashik', 'Alif', 'Zihan', 'Abir')
console.log(name)
