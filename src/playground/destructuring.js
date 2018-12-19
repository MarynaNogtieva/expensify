console.log('destructuring')

const person = {
  name: 'Marina',
  age: 26,
  location: {
    city: 'Toronto',
    temp: 34
  }
};

console.log(`${person.name} is ${person.age}.`)

// default
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`)

const {name: myName = 'Mon Nom', age: myAge = 20 } = person;
console.log(`${myName} is ${myAge}.`)

if (person.location.city && person.location.temp) {
  console.log(`It's ${person.location.temp}C in ${person.location.city}`)
}

const { city, temp } = person.location

if (city && temp) {
  console.log(`It's ${temp}C in ${city}`)
}

// renaming

const { city: myCity, temp: temperature } = person.location

if (myCity && temperature) {
  console.log(`It's ${temperature}C in ${myCity}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName);