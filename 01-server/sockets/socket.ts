import { Socket } from 'socket.io';

export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', ()=>{
        console.log('Cliente Desconectado');
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

        console.log('configurando usuario', payload.nombre);

        callback({
            ok: true,
            message: `Usuario ${payload.nombre}, configurado`
        });

    })
}