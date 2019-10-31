"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
//escuchar mensaje
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
//configurar usuario
exports.configuraUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('configurando usuario', payload.nombre);
        callback({
            ok: true,
            message: `Usuario ${payload.nombre}, configurado`
        });
    });
};
