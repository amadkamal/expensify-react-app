//
// Object destructuring

// console.log('destructuring');
// const person = {
//     name: 'kamal',
//     age: 36,
//     location: {
//         city: 'Kuala Lumpur',
//         temp: 36
//     }
// }

// const { name = 'Haji Kamal', age } = person;
// console.log(`${name} is ${age}.`)

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const bookOne = {
//     title: "ego is the enemy",
//     author: 'Rayyan Holiday',
//     publisher:  {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Galleri Ilmu'} = bookOne.publisher;
// console.log(`${publisherName}`);

//
// array destructuring
//

const address = ['NO. 14, Jalan 15/5A', 'Bandar Baru Bangi', 'Selangor', '43650'];
const [street, city, state, ] = address;
console.log(`You're in ${street} ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, price] = item;
console.log(`A medium ${drink} costs ${price}.`);