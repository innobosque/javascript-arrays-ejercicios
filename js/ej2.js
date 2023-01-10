"use strict";

//HTML Elements
const btn2EL = document.querySelector('#btn-ej2'),
    text2El = document.querySelector('#tam2'),
    range2EL = document.querySelector('#range-ej2'),
    result2EL = document.querySelector('.result-2');




/**
 * Función que devuelve un número aleatorio entre dos rangos
 * @param {Number} min - Número mínimo de un número aleatorio
 * @param {Number} max - Número máximo de un número aleatorio
*/
const getRandom = (min = 0, max = 9) => {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * Función para rellenar una array con humeros aleatorios
 * @param {Number} tamArray - Número que representa el tamaño del array
 * @returns {Array<Number>} Array con números aleatorios
 */
const fillArray = tamArray => {
    return Array.from(new Array(tamArray),() => getRandom());
}

/**
 * Función para renderizar los elementos del array y su suma todal
 * @param {Array<Number>} array - Vector relleno de números
 */
const showArray = array => {
    let ac = array.reduce(
        (acumulateValue,currentValue) => acumulateValue + currentValue
    );
    result2EL.innerHTML = `[${array.join('+')}] <span class="badge text-bg-secondary">${ac}</span>`;
}

/**
 * Inicio del programa
 */
const init = () => {
   let array = fillArray(Number(text2El.value));
   array.length && showArray(array);
}

//Listeners
btn2EL.onclick = init;


range2EL.addEventListener(
    'input',
    e => {
        text2El.value = e.target.value;
    }
);

text2El.addEventListener(
    'change',
    e => {
        range2EL.value = e.target.value;
    }
);