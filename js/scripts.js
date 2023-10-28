const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 5;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 5) % 5;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Agregar una función para reiniciar el slider al final
function restartSlider() {
    setTimeout(() => {
        currentIndex = 0;
        updateSlider();
    }, 6000);
}

// Llamar a la función para reiniciar el slider
restartSlider();

// Función que Valida el formulario

document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    validarFormulario();
});

function validarFormulario() {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  
  // Expresión regular para validar que solo contenga letras
  var valLetras = /^[A-Za-z]+$/;
  
  // Expresión regular para validar el formato de correo electrónico
  var valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  // Verificar si los campos nombre y apellido están vacíos o no cumplen con las validaciones
  if (nombre === "" || !valLetras.test(nombre)) {
    alert("Por favor, ingrese un nombre válido.");
    document.getElementById('nombre').focus();
    return false;
  }
  
  if (apellido === "" || !valLetras.test(apellido)) {
    alert("Por favor, ingrese un apellido válido.");
    document.getElementById('apellido').focus();
    return false;
  }
  
  //Verificar si la estructura del email introducido es correcto
  if (email === "" || !valEmail.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    document.getElementById('email').focus();
    return false;
  }
  
  // Mostrar mensaje de validación exitosa
  alert("Gracias por dejarnos tus comentarios.");

}