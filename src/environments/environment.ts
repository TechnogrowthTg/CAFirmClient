// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'assets/json/';
 export const serverBaseUrl = 'http://localhost:53124/';

export const environment = {
  production: false,
  login: serverBaseUrl + 'auth/login',
  getClientData: baseUrl + 'ClientData.json',
  getClientFormData: baseUrl + 'ClientGroup.json',
  postClientData : baseUrl + 'client/clientForm',

  getContactData: baseUrl + 'ContactData.json',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
