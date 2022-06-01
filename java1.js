// 1. es True
//2. es false
//3. es True

//compare 2 Strings y retorne un valor true.

"mundo" == "mundo";

//compare 2 Strings y devuelva false.

"hola" == "chao";

//involucre un String y un Número y retorne false.

const t = "perro";
const n = 10;
(t == "perro") && ( n >= 11);

//involucre un String y un Número y retorne true.

const a = "1";
const b = 1;
( a== "1" ) || ( b == 2 );


// tarea par o impar 

// pedir número al usuario
let numero = prompt ("Escribe un número");
// convertir valor
numero = parseInt (numero);

// verificar número par o impar

if (numero %2 == 0){
    alert ("tu es número par")
}
else {
    alert ("tu número es impar")
}
