# 🎁 Amigo Secreto - Challenge 🎉

## 📌 Descripción
Este proyecto es un reto de programación en JavaScript en el que se debe almacenar el nombre de seis amigos en una lista y seleccionar uno al azar para que actúe como "amigo secreto". El objetivo principal es demostrar el uso de estructuras de datos como arrays y la aplicación de funciones para seleccionar un elemento aleatorio.

## 📂 Estructura del Código

El código sigue la siguiente estructura:

📝 Definición de la lista de amigos: Se almacena en un array los nombres de los seis amigos.

🎲 Selección aleatoria: Se usa una función para elegir un amigo al azar utilizando Math.random() y Math.floor().

🖥️ Mostrar el resultado: Se imprime el nombre del amigo secreto seleccionado en la consola.

## 💻 Ejemplo de Código
// 🎭 Lista de amigos

const amigos = ["Carlos", "Ana", "Luis", "María", "Pedro", "Sofía"];

// 🔀 Función para seleccionar un amigo secreto

function seleccionarAmigoSecreto(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

// 🎉 Mostrar el resultado

console.log("🎁 Tu amigo secreto es: " + seleccionarAmigoSecreto(amigos));

## 🤝 Contribución

Si deseas mejorar este reto o aportar nuevas ideas, eres bienvenido a hacer un fork del repositorio y enviar un pull request.