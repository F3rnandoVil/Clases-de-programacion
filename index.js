// ALERT y Functions
let variable = "Que tengan un buen dia :)";
bienvenida();

alert(variable);

console.log(variable)

function bienvenida() {
    let nombre = "CFS";
    let variable = "Hola " + nombre;
    alert(variable);
}

function sumade2() {
    let x = prompt("Ingresa tu número");
    let y = prompt("Ingresa tu número");
    let addition = Number(x) + Number(y);
    let res = "Tu resultado es " +addition;
    console.log(res);
    alert(res);
}
sumade2();

// PROMT

let numero = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame un número"));
console.log(typeof (numero + numero2));
document.write(numero + numero2);

// ARRAYS

let numeros = [3,"Fernando",true,false,"Hola"] // Los array tienen un indice y comienza en 0

//FOR

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    document.write(numeros[i]+"<br>")
};
//El ciclo for es un bucle
// el scope es alcance 

// IF y IF ELSE

let variable2 = true +"<br>";
if (variable2) {
    document.write(variable2) + "<br>";
}
if (variable2) {
    document.write("Mi variable es true")
} else {
    document.write("Mi variable es false")
}; 
// if (condition) {
    
// } else {
//     if (condition) {
        
//     } else {
        
//     }
// };
// SWITCH
let dia = prompt("Ingresa un dia de la semana")
switch (dia) {
    case "Lunes":
        console.log("El dia es lunes")
        break;
    case "Martes":
        console.log("El dia es martes")
        break;

    default:
        console.log("Es otro dia de la semana difernte al lunes o martes")
        break;
}