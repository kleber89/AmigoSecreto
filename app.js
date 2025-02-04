class Amigos {
  constructor() {
      this.amigos = [];
  }

  agregarAmigo(nombre) {
      if (!nombre.trim()) {
          console.log("El nombre no puede estar vacío.");
          return;
      }
      if (this.amigos.includes(nombre)) {
          console.log("Este amigo ya está en la lista.");
          return;
      }
      this.amigos.push(nombre);
      console.log(`Amigo agregado: ${nombre}`);
  }

  actualizarAmigo(indice, nuevoNombre) {
      if (indice < 0 || indice >= this.amigos.length) {
          console.log("Índice fuera de rango.");
          return;
      }
      if (!nuevoNombre.trim()) {
          console.log("El nuevo nombre no puede estar vacío.");
          return;
      }
      this.amigos[indice] = nuevoNombre;
      console.log(`Amigo actualizado en la posición ${indice}: ${nuevoNombre}`);
  }

  sortearAmigos() {
      return [...this.amigos].sort(() => Math.random() - 0.5);
  }

  listarAmigos() {
      if (this.amigos.length === 0) {
          console.log("No hay amigos en la lista.");
          return;
      }
      console.log("Lista de amigos:", this.amigos.join(", "));
  }
}

// Ejemplo de uso:
const listaAmigos = new Amigos();
listaAmigos.agregarAmigo("Carlos");
listaAmigos.agregarAmigo("Ana");
listaAmigos.listarAmigos();
listaAmigos.actualizarAmigo(1, "María");
console.log("Sorteo:", listaAmigos.sortearAmigos());
