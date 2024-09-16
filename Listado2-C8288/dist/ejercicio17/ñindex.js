"use strict";
// Definir las versiones del tipo APIUser
// Función que maneja ambas versiones del tipo APIUser
function printAPIUserInfo(apiUser) {
    if (apiUser.apiVersion === 'v1') {
        console.log(`API User V1: ${apiUser.userName} (ID: ${apiUser.userId})`);
    }
    else if (apiUser.apiVersion === 'v2') {
        console.log(`API User V2: ${apiUser.userFullName} (ID: ${apiUser.userId}, Email: ${apiUser.userEmail})`);
    }
}
// Ejemplo de uso con ambas versiones de APIUser
const apiUserV1 = {
    apiVersion: 'v1',
    userId: 1,
    userName: 'Enrique'
};
const apiUserV2 = {
    apiVersion: 'v2',
    userId: 2,
    userFullName: 'Enrique',
    userEmail: 'Enrique.gless@example.com'
};
printAPIUserInfo(apiUserV1); // Muestra los datos
