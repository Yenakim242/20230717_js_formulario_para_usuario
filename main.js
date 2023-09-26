// Prueba de evaluación práctica(17072023)
// - Se puede utilizar todo tipo de documentación y de apuntes
// - El ejercicio 1 tendrá una puntuación máxima de 2,5 puntos y el ejercicio 2 de 7,5 puntos.
// - Crear una carpeta para cada uno de los ejercicios

// Validar un formulario de 3 campos con las siguientes reglas:
// 1 - Campo Nombre. Comprobar si está vacío. Si es el caso, añada un borde en color rojo y un mensaje en color rojo "Rellena el campo nombre ("Omple el camp nom").
// 1-1) Busca los elementos que necesita
let form = document.querySelector("form");
let inputNombre = document.getElementById("inputNombre");
let inputEmail = document.getElementById("inputEmail");
let inputClave = document.getElementById("inputClave");
let spans = document.querySelectorAll("span");
let boton = document.querySelector("button");
const regExpEmail =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// 1-2) Añade un evento para enviar el formato
form.addEventListener("submit", (e)=>{
// Para el evento cancelable
    e.preventDefault();
    // 1-3) para resetear los estilos de input invalido
    resetearEstiloErrorInput();
    // 1-4) Comprobar si el campo nombre está vacío
    if (inputNombre != null) {
        if (inputNombre.value === "") {
            inputNombre.classList.add("inputError");
            spans[0].textContent = "Omple el camp nom";
        } if (inputEmail.value === "") {  // 2 - Campo Email. Comprobar si el campo está vacío. Si es el caso, añada un borde en color rojo y un mensaje en color rojo "Rellena el camp email"("Omple el camp email."). Compruebe si el campo tiene un formato correcto. // Si no es el caso, añadir un borde en color rojo y un mensaje en color rojo "Añadir un correo electrónico correcto"("Afegeix un correu electrònic correcte").
        // 2-1) Comprobar si el campo email está vacío.
            inputEmail.classList.add("inputError");
            spans[1].textContent = "Omple el camp email";
        } else if (!regExpEmail.test(inputEmail.value)) { 
            // 2-2) Comprobar el formato de email con regExp
            inputEmail.classList.add("inputError");
            spans[1].textContent = "Afegeix un correu electrònic correcte";
        } if (inputClave.value === "" ) { // 3 - Campo contraseña. Comprobar si el campo está vacío. Si es el caso, añada un borde en color rojo y un mensaje en color rojo "Rellena el campo contraseña"("Omple el camp contrasenya"). Asegúrese de que el campo tiene al menos 6 caracteres. Si no es el caso, añada un borde en color rojo y un mensaje en color rojo "Al menos 6 caracteres"("Com a mínim 6 caràcters").
            inputClave.classList.add("inputError");
            spans[2].textContent = "Omple el camp contrasenya";
        } else if (inputClave.value.length < 6) {
            inputClave.classList.add("inputError");
            spans[2].textContent = "Com a mínim 6 caràcters";
        } else { // 4.  Cuando todos los campos estén correctos, añada un "alerto" con el mensaje "¡El formulario ha sido enviado!"(" El formulari ha estat enviat!").
            alert("Ha enviado el formulario!");
            return true;
        }
    } 
});

// 5. Función para resetear estilos errores
let inputs = document.querySelectorAll("input");
function resetearEstiloErrorInput() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("inputError");
        spans[i].textContent = "";
    }
}

// Evaluación de la práctica - pruebas de funcionalidades y optimización de paginas web
// 1. Atributos y métodos DOM (Asignación correcta)
// 2. Atributos y métodos de objetos predefinidos (Asignación correcta).
// 3. Eventos(Asignación correcta).
// 4. Javascript ES6(Asignación correcta).