type MsgNotification = {
    type: 'message';
    msgSender: string;
    msgContent: string;
  };
  
  type AlertNotify = {
    type: 'alert';
    alertSeverity: 'info' | 'warning' | 'error';
    alertDesc: string;
  };
  
  type StatusNotify = {
    type: 'status';
    userCondition: 'online' | 'offline' | 'busy';
    username: string;
  };
  
  // Cambiamos el nombre del tipo a `AppNotification`
  type AppNotification = MsgNotification | AlertNotify | StatusNotify;
  
  // Función que procesa las notificaciones
  function processNotification(notification: AppNotification): void {
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
  const msgNotification: MsgNotification = {
    type: 'message',
    msgSender: 'Leonardo',
    msgContent: 'Hola Sharon, ¿cómo estás?'
  };
  
  const alertNotify: AlertNotify = {
    type: 'alert',
    alertSeverity: 'warning',
    alertDesc: 'Tu conexión es inestable.'
  };
  
  const statusNotify: StatusNotify = {
    type: 'status',
    userCondition: 'online',
    username: 'Sharon'
  };
  
  processNotification(msgNotification);  // Mensaje de Leonardo: Hola Sharon, ¿cómo estás?
  processNotification(alertNotify);  // Alerta de nivel warning: Tu conexión es inestable.
  processNotification(statusNotify);  // El usuario Sharon está online
  