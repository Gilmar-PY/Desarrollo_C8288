"use strict";
// Función que procesa las notificaciones
function processNotification(notification) {
    switch (notification.type) {
        case 'message':
            console.log(`Mensaje de ${notification.msgSender}: ${notification.msgContent}`);
            break;
        case 'alert':
            console.log(`Alerta de nivel ${notification.alertSeverity}: ${notification.alertDesc}`);
            break;
        case 'status':
            console.log(`El usuario ${notification.username} está ${notification.userCondition}`);
            break;
        default:
            console.log("Tipo de notificación no reconocido.");
    }
}
// Ejemplos de uso
const msgNotification = {
    type: 'message',
    msgSender: 'Leonardo',
    msgContent: 'Hola Sharon, ¿cómo estás?'
};
const alertNotify = {
    type: 'alert',
    alertSeverity: 'warning',
    alertDesc: 'Tu conexión es inestable.'
};
const statusNotify = {
    type: 'status',
    userCondition: 'online',
    username: 'Sharon'
};
processNotification(msgNotification); // Mensaje de Leonardo: Hola Sharon, ¿cómo estás?
processNotification(alertNotify); // Alerta de nivel warning: Tu conexión es inestable.
processNotification(statusNotify); // El usuario Sharon está online
