import { Usuario } from "./usuario";

export class usuariosLista{

    private lista : Usuario[] = [];

    constructor(){
        
    }

    /* agregar usuario */
    public agregar( usuario : Usuario){
        this.lista.push( usuario );
        console.log(this.lista);
        return usuario;
    }

    /* actualizar nombre */
    public actualizarNombre( id : string, nombre : string ){

        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break
            }
        }
        console.log("=== actualizando usuario ===");
        console.log(this.lista);
    }

    /* obtener lista */
    public getLista(){
        return this.lista;
    }

    /* obtener usuario */
    public getUsuario( id : string ){
        return this.lista.find(usuario=>usuario.id === id);
    }
    
    /* obtener usuario en sala */
    public getUsuarioEnSala(sala: string){
        return this.lista.filter(usuario =>usuario.sala = sala);
    }

    /* borrar usuario */
    public borrarUsuario(id : string ){
        const tempUser = this.getUsuario(id);
        this.lista = this.lista.filter(usuario=> usuario.id !== id );
        console.log(this.lista);
        return tempUser;
    }

}