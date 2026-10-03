// Paso 2: Recopilación de Datos y Tipos de Variables
const nombre = prompt("Ingresa tu nombre completo:"); 

// let porque la edad puede cambiar
let edad = prompt("Ingresa tu edad:");

const ocupacion = prompt("Ingresa tu ocupacion:");

let edadConfirmada = prompt("Ingresa de nuevo tu edad:");

//Paso 3: Conversión de Tipos y Estructuras Condicionales
// Reasignacion: posible porque edad es let
edad = edadConfirmada;
console.log("Tipo antes de convertir:", typeof edad); // string

// Convertir texto a numero
edad = parseInt(edad);
console.log("Tipo despues de convertir:", typeof edad); // number

// Validar la edad
if (isNaN(edad) || edad <= 0) {
  alert("La edad no es un numero valido.");
  throw new Error("Edad invalida."); // detiene el programa
} else if (edad < 18) {
  alert("Debes ser mayor de edad.");
  throw new Error("Usuario menor de edad."); // detiene el programa
} else {
  console.log("Edad valida.");
}

//Paso 4: Funciones y Operadores

function crearPerfil(nombre, edad, ocupacion) {
  // compara valor y tipo
  if (nombre === null || nombre.trim() === "") {
    return "Error: el nombre esta vacio.";
  }
  // linea de retorno con string
  return `Hola, ${nombre}. Tienes ${edad} añosy eres un/a ${ocupacion}.`;
}

const mensaje = crearPerfil(nombre, edad, ocupacion);
console.log(mensaje);

//Paso 5: Arrays y Bucles
const hobbies = [];

// Pedir 3 hobbies
for (let i = 0; i < 3; i++) {
  const hobby = prompt(`Ingresa tu hobby ${i + 1}:`);
  if (hobby !== null && hobby.trim() !== "") {
    hobbies.push(hobby); // agrega al array
  }
}

// Mostrar cada hobby
hobbies.forEach((hobby, i) => {
  console.log(`${i + 1}. ${hobby}`);
});


//Paso 6: Objetos y Renderizado en el DOM (reto extra)

// Objeto con todos los datos
const perfilUsuario = {
  nombre: nombre,
  edad: edad,
  ocupacion: ocupacion,
  hobbies: hobbies
};

// Seleccionar el div
const contenedor = document.getElementById("perfil-container");

// Convertir hobbies en <li>
let listaHobbies = "";
for (const hobby of perfilUsuario.hobbies) {
  listaHobbies += `<li>${hobby}</li>`;
}

// Mostrar el perfil en la página con innerHTML y template literal
contenedor.innerHTML = `
  <h2>${perfilUsuario.nombre}</h2>
  <p>${mensaje}</p>
  <p><strong>Edad:</strong> ${perfilUsuario.edad} años</p>
  <p><strong>Ocupación:</strong> ${perfilUsuario.ocupacion}</p>
  <h3>Hobbies</h3>
  <ul>${listaHobbies}</ul>
`;