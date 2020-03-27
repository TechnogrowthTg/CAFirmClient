// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'assets/json/';
 export const serverBaseUrl = 'http://localhost:3124/';

export const environment = {
  production: false,
  login: serverBaseUrl + 'auth/login',

  // client
  getClientData: serverBaseUrl + 'client/clients',
  postClientData : serverBaseUrl + 'client/insertClient',
  getClientDataById : serverBaseUrl + 'client/clientById/{clientId}',
  updateClientData : serverBaseUrl + 'client/updateclient',

  // client Group
  getClientGroupData : serverBaseUrl + 'group/groups',
  postClientGroupData : serverBaseUrl + "group/insertGroup",
  getClientGroupDataById : serverBaseUrl + 'group/groupById/{groupById}',
  updateClientGroupData : serverBaseUrl + 'group/updateGroup',



  // contact
  getContactData: baseUrl + 'ContactData.json',

  // service
  getServiceData : baseUrl + 'ServiceData.json',
  postServiceData : baseUrl + 'ServiceData.json'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
