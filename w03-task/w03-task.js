/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.getElementById('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2)
{
    return number1 - number2;
}
function subtractNumbers()
{
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);

    document.getElementById('subtract').value = Subtract(number1, number2);

}
document.getElementById('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2)
{
    return number1 - number2;
}
function multiplyNumbers()
{
    let number1 = Number(document.querySelector('#multiply1').value);
    let number2 = Number(document.querySelector('#mulitply2').value);

    document.getElementById('mulitply').value = product = multiply(number1, number2);

}
document.getElementById('#mulitplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2)
{
    return number1 - number2;
}
function divideNumbers()
{
    let number1 = Number(document.querySelector('#divide1').value);
    let number2= Number(document.querySelector('#divide2').value);

    document.getElementById('#divide').value = difference = divide(number1, number2);

}
document.getElementById('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
