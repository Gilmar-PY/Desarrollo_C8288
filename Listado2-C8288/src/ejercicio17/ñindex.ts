// Definir las versiones del tipo APIUser

type APIUserV1 = {
    apiVersion: 'v1';
    userId: number;
    userName: string;
  };
  
  type APIUserV2 = {
    apiVersion: 'v2';
    userId: number;
    userFullName: string;
    userEmail: string;
  };
  
  // Discriminated union para combinar las versiones
  type APIUser = APIUserV1 | APIUserV2;
  
  // Función que maneja ambas versiones del tipo APIUser
  function printAPIUserInfo(apiUser: APIUser): void {
    if (apiUser.apiVersion === 'v1') {
      console.log(`API User V1: ${apiUser.userName} (ID: ${apiUser.userId})`);
    } else if (apiUser.apiVersion === 'v2') {
      console.log(`API User V2: ${apiUser.userFullName} (ID: ${apiUser.userId}, Email: ${apiUser.userEmail})`);
    }
  }
  
  // Ejemplo de uso con ambas versiones de APIUser
  const apiUserV1: APIUserV1 = {
    apiVersion: 'v1',
    userId: 1,
    userName: 'Enrique'
  };
  
  const apiUserV2: APIUserV2 = {
    apiVersion: 'v2',
    userId: 2,
    userFullName: 'Enrique',
    userEmail: 'Enrique.gless@example.com'
  };
  
  printAPIUserInfo(apiUserV1);  // Muestra los datos
  