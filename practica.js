
/*
alert("¡Bienvenido seas a este cuchitril!");

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert("¡CHALE PADRINO! Hazlo bien.");
let mensajeDeError = "¡CHALE PADRINO! Hazlo bien.";
alert(mensajeDeError)

let nombre = prompt('¿Cómo te llamas sabandija?');

let edad = prompt('Ahora pon tu edad');
if (edad >= 18) (
    alert('Ya puedes remojar la brocha')
);

let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

*/


// SUGERENCIA DE USOS DEL CONSOLE.LOG()
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
//


/*
// 1.-
let semana = prompt('¿Qué día de la semana es?');
console.log(`Valor tecleado: ${semana}` );

if (semana == 'Sábado' || semana == 'Domingo') (
    alert('Buen fin de semana')
);
else( 
    alert('Buena semana')
)


  let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}


//2.-
let numero = prompt('Introduce un número positivo o negativo');
if (numero > 0) (
    alert('Positivo')
);
else if (numero < 0) (
    alert('Negativo')
);
else (
    alert('El número es cero')
)

```
let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
```

//3.- 

alert('Esta es tu puntuación');

let puntuación = 75;

if (puntuacion >= 100) (
    alert('Lo lograste bitch')
);
else (
    alert('Intenta de nuevo carnal')
);

```
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
```


//4.-

let saldo = 4000;
alert(`Tu saldo es de: ${saldo}`);

/*
  let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);



//5.- 
alert('Por favor introduce tu nombre');

let nombre = prompt('Escríbelo aquí:');
alert(`Bienvenido: ${nombre}`);


let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);
*/

```
let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
    let numero = prompt('Digite el numero:');
    soma += numero;
    contador--; // Decrementar el contador
}

let promedio = soma / qtdNumeros;

console.log(promedio);
```
/*
//1.- 

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador ++;
}
//2.-
let contado = 10;

while (contador >= 0) {
    console.log(contado);
    contado --;
}

//3.- 

let numeroMax = prompt('Digita número para la cuenta regresiva')
while (numeroMax >= 0 ) {
    console.log(numeroMax);
    numeroMax --;
}

// 4.-
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let conteo = 0;

while (conteo <= numeroMaximo) {
console.log(conteo);
conteo++;
}

// OPERADOR AND (&&) Ambas condiciones verdaderas
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

// OPERADOR OR (||) Al menos una condición verdadera
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }
*/



// DESAFIOS FINALES

/*
//1.-
console.log('Bienvenido, papito');

// 2.-
let nombre = 'Osmar';
console.log(`¡Hola, el cacas alias ${nombre}`);

//3.-
let nombre2 = 'Osmar';
alert (`¡Hola, el cacas alias ${nombre2}`);

//4.-
let programa = prompt ('¿Cuál lenguaje de programació te gusta más?');
console.log(programa);

//5.-
let valor1 = 30;
let valor2 = 66;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//6.-
let valors1 = 30;
let valors2 = 66;
let resultados = valors1 - valors2;
console.log(`La suma de ${valors1} y ${valors2} es igual a ${resultados}`);

//7.-
let edad = prompt('¿Cuál es tu edad');

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

//8.-
let numero = prompt('Elige un número positivo, negativo o cero')

if (numero > 0) {
    alert('Es positivo');
} else if(numero < 0) {
    alert('El número es negativo');
} else {
    alert('El número es cero');
}

//9.- 

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador ++;
}

//10.- 
let nota = 10

if (nota >= 7) {
    alert('Aprobado');
} else {
    alert('Reprobado por burro');
}

//11.-
ran = Math.random();
console.log(ran);

//12.-

ren = Math.floor(Math.random() * 10)+1;
console.log(ren);

//13.- 
run = Math.floor(Math.random()*1000)+1;
console.log(run)
*/