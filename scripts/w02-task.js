/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jeremiah Powell';
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = ('images/personalpicture.png')




/* Step 3 - Element Variables */



const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

imageElement.setAttribute('src', `${profilePicture}`);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let myFoods = ['barbecue', 'burgers', 'sandwiches', 'soup'];

foodElement.innerHTML += `<br>${myFoods}`;

let newFood = 'Bacon';
myFoods.push(newFood);

foodElement.innerHTML += `<br>${myFoods}`;

myFoods.shift();
foodElement.innerHTML += `<br>${myFoods}`;

myFoods.pop();
foodElement.innerHTML += `<br>${myFoods}`;






