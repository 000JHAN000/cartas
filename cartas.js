// Guarda en la variable 'boton' el elemento HTML que tiene el id="BARAJA".
const boton = document.getElementById('BARAJA');

// Guarda en la variable 'contenedor' el elemento HTML con el id="contenedor-cartas".
const contenedor = document.getElementById('contenedor-cartas');

// Se crea una lista (array) para guardar todas las rutas de las imágenes.
const baraja = [
    // Cada línea es la ruta a una de tus imágenes.
     '.img/Blue_0.png',
    '.img/Blue_1.png',
    '.img/Blue_2.png',
    '.img/Blue_3.png',
    '.img/Blue_4.png',
    '.img/Blue_5.png',
    '.img/Blue_6.png',
    '.img/Blue_7.png',
    '.img/Blue_8.png',
    '.img/Blue_9.png',
    '.img/Blue_Draw_2.png',
    '.img/Blue_Reverse.png',
    '.img/Blue_Skip.png',
    '.img/Green_0.png',
    '.img/Green_1.png',
    '.img/Green_2.png',
    '.img/Green_3.png',
    '.img/Green_4.png',
    '.img/Green_5.png',
    '.img/Green_6.p ng',
    '.img/Green_7.png',
    '.img/Green_8.png',
    '.img/Green_9.png',
    '.img/Green_Draw_2.png',
    '.img/Green_Reverse.png',
    '.img/Green_Skip.png',
    '.img/Red_0.png',
    '.img/Red_1.png',
    '.img/Red_2.png',
    '.img/Red_3.png',
    '.img/Red_4.png',
    '.img/Red_5.png',
    '.img/Red_6.png',
    '.img/Red_7.png',
    '.img/Red_8.png',
    '.img/Red_9.png',
    '.img/Red_Draw_2.png',
    '.img/Red_Reverse.png',
    '.img/Red_Skip.png',
    '.img/Wild_Card_Change_Colour.png',
    '.img/Wild_Card_Draw_4.png',
    '.img/Yellow_0.png',
    '.img/Yellow_1.png',
    '.img/Yellow_2.png',
    '.img/Yellow_3.png',
    '.img/Yellow_4.png',
    '.img/Yellow_5.png',
    '.img/Yellow_6.png',
    '.img/Yellow_7.png',
    '.img/Yellow_8.png',
    '.img/Yellow_9.png',
    '.img/Yellow_Draw_2.png',
    '.img/Yellow_Reverse.png',
    '.img/Yellow_Skip.png',
]; // Aquí termina la lista de la baraja.

// Se define la función que se usará para mezclar la baraja.
function barajar(array) {
    // Un bucle que recorre la baraja desde la última carta hasta la primera.
    for (let i = array.length - 1; i > 0; i--) {
        // Elige un número al azar entre 0 y la posición actual 'i'.
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambia la carta actual con la carta de la posición elegida al azar.
        [array[i], array[j]] = [array[j], array[i]];
    } // Fin del bucle.
} // Fin de la función barajar.

// Llama a la función para mezclar la baraja ahora mismo.
barajar(baraja);

// Se crea un contador que empieza en 0 para llevar la cuenta de las cartas mostradas.
let indiceActual = 0;

// Se define la función que se ejecutará cada vez que se haga clic en el botón.
function mostrarSiguienteCarta() {
    
    // Revisa si el contador es menor que el total de cartas (si todavía quedan cartas).
    if (indiceActual < baraja.length) {
        // Crea una nueva etiqueta de imagen <img> en la memoria.
        const nuevaImagen = document.createElement('img');
        // Asigna a la nueva imagen la ruta de la carta que toca según el contador.
        nuevaImagen.src = baraja[indiceActual];
        // Le añade a la imagen la clase 'carta-imagen' para darle estilo desde CSS.
        nuevaImagen.classList.add('carta-imagen');
        // Pone la nueva imagen dentro del div 'contenedor' para que se vea en la página.
        contenedor.appendChild(nuevaImagen);
        // Le suma 1 al contador para que el próximo clic muestre la siguiente carta.
        indiceActual++;
    // Si no quedan más cartas, se ejecuta este bloque.
    } else {
        // Muestra una ventana de alerta con un mensaje.
        alert("SE ACABARON LAS CARTAS.");
        // Desactiva el botón para que no se pueda hacer más clics.
        boton.disabled = true;
    } // Fin del bloque if/else.
} // Fin de la función mostrarSiguienteCarta.


// Le dice al botón que cuando se oprima los clics y ejecute la función mostrarSiguienteCarta cada vez.
boton.addEventListener('click', mostrarSiguienteCarta);