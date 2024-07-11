//VARIABLES
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible)+1; //GENERADOR ALEATORIO DE NUMEROS ENTRE 1 Y 10
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 10;

//console.log(numeroSecreto)
// BUCLE CON CONDICIONALES
while (numeroUsuario != numeroSecreto) { // CONDICION DENTRO DEL WHILE
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}, culero? Por fi:`)); //parseInt cambia a Int
    
    console.log(typeof(numeroUsuario)); // typeof da el tipo de variable  

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroSecreto}. Lo hiciste ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`); // TEMPLATE STRING CON OPERADOR TERNARIO (? ES iF, : ES else)
    } else {
        if (numeroUsuario > numeroSecreto) {
                alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
            }
            // CONTADOR DE INTENTOS
            //intentos = intentos +1; //AQUI LA SUMA DEPENDE DEL ERROR, ESTA DENTRO DE LAS CONDICIONES
            //intentos += 1
            intentos ++ //FORMA MÁS USADA DE INCREMENTADORES
            //palabraVeces = 'intentos';
            
            if (intentos > maximosIntentos) {
                alert(`Ya son todos los intentos perro, lo hiciste ${maximosIntentos} veces`);
                break; // CORTE DEL LOOP
            }
        };
    }     
5