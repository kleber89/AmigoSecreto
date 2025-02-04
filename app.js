let amigos = []; // Array para almacenar los nombres de tus amigos

function agregarAmigo(nombre) {
    if (nombre) {
        amigos.push(nombre); // Agrega el nombre al array de amigos
    } else {
        console.log("El nombre no puede estar vacío"); // Mensaje de error si el nombre es inválido
    }
}

// Nueva función para actualizar un amigo en la lista
function actualizarAmigo(indice, nuevoNombre) {
    if (indice >= 0 && indice < amigos.length) {
        amigos[indice] = nuevoNombre; // Actualiza el nombre en el array
    } else {
        console.log("Índice fuera de rango"); // Mensaje de error si el índice es inválido
    }
}

// Nueva función para sortear amigos
function sortearAmigos() {
    return [...amigos].sort(() => Math.random() - 0.5); // Devuelve un nuevo array con los amigos en orden aleatorio
}