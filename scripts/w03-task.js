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
function subtract (number_1, number_2)
{
    return number_1 - number_2;
}
function subtractNumbers()
{
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2);

}
document.getElementById('subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (new_number1, new_number2)
{
    return new_number1 * new_number2;
}
function multiplyNumbers()
{
    const multiplynumber1 = Number(document.querySelector('#factor1').value);
    const multiplynumber2 = Number(document.querySelector('#factor2').value);

    document.getElementById('product').value = multiply(multiplynumber1, multiplynumber2);

}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2)
{
    return number1 / number2;
}
function divideNumbers()
{
    const number1 = Number(document.querySelector('#dividend').value);
    const number2 = Number(document.querySelector('#divisor').value);

    document.getElementById('quotient').value = divide(number1, number2);

}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', calculateTotal);

    function calculateTotal() {
      const subtotalInput = document.getElementById('subtotal');
      const subtotal = parseFloat(subtotalInput.value) || 0; // Convert to a float, default to 0 if not a valid number

      const isMember = document.getElementById('member').checked;

      const discount = isMember ? 0.2 : 0; // 20% discount if a member, 0% otherwise
      const discountedTotal = subtotal - (subtotal * discount);

      const totalSpan = document.getElementById('total');
      totalSpan.textContent = `$ ${discountedTotal.toFixed(2)}`;
    }



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');


/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');



/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((prior, current) => prior + current, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');


/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((prior, current) => prior + current, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

