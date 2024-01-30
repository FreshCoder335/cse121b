/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2)
{
    return number1 - number2;
}
function subtractNumbers()
{
    const number1 = Number(document.querySelector('#subtract1').value);
    const number2 = Number(document.querySelector('#subtract2').value);

    document.getElementById('subtract').value = Subtract(number1, number2);

}
document.getElementById('subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2)
{
    return number1 * number2;
}
function multiplyNumbers()
{
    const number1 = Number(document.querySelector('#multiply1').value);
    const number2 = Number(document.querySelector('#mulitply2').value);

    document.getElementById('mulitply').value = multiply(number1, number2);

}
document.getElementById('mulitplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2)
{
    return number1 / number2;
}
function divideNumbers()
{
    const number1 = Number(document.querySelector('#divide1').value);
    const number2= Number(document.querySelector('#divide2').value);

    document.getElementById('#divide').value = divide(number1, number2);

}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotalButton').addEventListener('click', calculateTotal);

function calculateTotal() {
    
    const subtotal = parseFloat(document.getElementById('subtotal').value) || 0;
    
    const applyDiscount = document.getElementById('membership').checked;
    
    if (applyDiscount) {
        subtotal *= 0.8; 
    }

    const total = subtotal.toFixed(2);
    document.getElementById('total').textContent = total;
}



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */

document.addEventListener('DOMContentLoaded', function () {
   
    const oddNumbers = numbersArray.filter(function (number) {
        return number % 2 !== 0;
    });

    document.getElementById('odds').textContent = oddNumbers.join(', ');
});


/* Output Evens Only Array */
document.addEventListener('DOMContentLoaded', function () {

    const evenNumbers = numbersArray.filter(function (number) {
        return number % 2 === 0;
    });

    document.getElementById('evens').textContent = evenNumbers.join(', ');
});



/* Output Sum of Org. Array */
document.addEventListener('DOMContentLoaded', function () {

   const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
    document.getElementById('sumOfArray').textContent = sumOfArray;
});


/* Output Multiplied by 2 Array */

document.addEventListener('DOMContentLoaded', function() {
   const multipliedArray = numbersArray.map(number => number * 2);
    document.getElementById('multiplited').textContent = multipliedArray.join(', ');
});



/* Output Sum of Multiplied by 2 Array */
document.addEventListener('DOMContentLoaded', function () {
    

    
    const multipliedArray = numbersArray.map(function (element) {
        return element * 2;
    });

    
    const sumOfMultiplied = multipliedArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0); 

    document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
});

