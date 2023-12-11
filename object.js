// ES5

let personne = Object({
    nom: 'Maurel',
    age: 28
})

let humain = Object({
    race: 'noire',
    genre: 'masculin'
})



// ES6

class Person {
    constructor(name, surname, age, sexe, address) {
        this.name = name,
        this.age = age,
        this.surname = surname,
        this.sexe = sexe,
        this.address = address
    }

    identite() {
        console.log(`${this.surname[0]} : ${this.name}`)
    }

    genre() {
        console.log(`Monsieur ${this.name} `)
    }
}

class Humain {
    constructor(genre, race) {
        this.race = race,
        this.genre = genre
    }
}

let person1 = new Person('Maurel', 'Gervasi', 28, 'masculin', '15 Rue du genral de Salles');
let humain1 = new Humain('masculain', 'noire');


Person.prototype.changeAge = function(age){
    this.age = age
    console.log(`Le nouvel age est ${this.age}`)
}


console.log(person1)

person1.identite()
person1.genre()
person1. changeAge(33)
