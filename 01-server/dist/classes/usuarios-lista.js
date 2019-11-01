"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class usuariosLista {
    constructor() {
        this.lista = [];
    }
    /* agregar usuario */
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    /* actualizar nombre */
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("=== actualizando usuario ===");
        console.log(this.lista);
    }
    /* obtener lista */
    getLista() {
        return this.lista;
    }
    /* obtener usuario */
    getUsuario(id) {
        return this.lista.find(usuario => usuario.id === id);
    }
    /* obtener usuario en sala */
    getUsuarioEnSala(sala) {
        return this.lista.filter(usuario => usuario.sala = sala);
    }
    /* borrar usuario */
    borrarUsuario(id) {
        const tempUser = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        console.log(this.lista);
        return tempUser;
    }
}
exports.usuariosLista = usuariosLista;
