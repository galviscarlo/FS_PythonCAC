//Uso de la API
 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
// Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida: ', err)); // Capturar errores

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    async function logRandomFru() {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

        const receta = await response.json();
        console.log(receta);

        document.querySelector("#Receta #Meal").textContent = receta.meals[0].strMeal;
        document.querySelector("#Receta #Category").textContent = receta.meals[0].strCategory;
        document.querySelector("#Receta #Picture").src = receta.meals[0].strMealThumb;

/* 
console.log(receta.meals);                     
console.log(receta.meals[0].strMeal);
console.log(receta.meals[0].strCategory);
console.log(receta.meals[0].strMealThumb);
console.log(user.results[0].name.last);
console.log(user.results[0].picture.thumbnail);

*/
}

logRandomFru();

// Función que Valida el formulario

/*document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    validarFormulario();
});*/

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
