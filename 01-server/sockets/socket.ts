import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { usuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new usuariosLista();

export const agregarUsuario = ( cliente: Socket) => {
    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);
}

export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', ()=>{
        usuariosConectados.borrarUsuario(cliente.id);
    });

}

//escuchar mensaje
export const mensaje = ( cliente : Socket, io: SocketIO.Server )=>{
    cliente.on('mensaje',(payload: { de: string, cuerpo: string })=>{
        console.log('Mensaje recibido', payload)
        io.emit('mensaje-nuevo', payload);

    })
}

//configurar usuario
export const configuraUsuario = ( cliente : Socket, io: SocketIO.Server )=>{
    cliente.on('configurar-usuario',(payload: { nombre: string }, callback: Function )=>{

        usuariosConectados.actualizarNombre(cliente.id, payload.nombre);

        callback({
            ok: true,
            message: `Usuario ${payload.nombre}, configurado`
        });

    })
}