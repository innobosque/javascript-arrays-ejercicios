"use strict";
//HTML elements
const btn1EL = document.querySelector('#btn-ej1');

//Constantes y variables primitivas y no primitivas (por referencia)
let numeros = [];
const tam = 10;

/**
 * Función para rellenar el array de números con números
 * @returns { Boolean } - Retorna true cuando el array números está relleno
 */
const rellenar = () => {
    while(numeros.length!==tam){
        let numString = prompt(`Número ${numeros.length + 1}`);
        if(numString===null)
            return;
        numString = numString.trim();
        
        if(numString.length){
            let num = Number(numString);
            if(!isNaN(num))
                numeros.push(num);
        }
    }
    return (numeros.length===tam);
}

/**
 * Mostrar por consola el índice y el contenido
 */
const mostrar = () => {
    console.table(numeros);
}


//Listeners
btn1EL.addEventListener(
    'click',
    ()=>{
       rellenar() && mostrar();       
    }
)