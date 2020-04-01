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
  postClientData: serverBaseUrl + 'client/insertClient',
  getClientDataById: serverBaseUrl + 'client/clientById/{clientId}',
  updateClientData: serverBaseUrl + 'client/updateclient',
  deleteClientData: serverBaseUrl + 'client/deleteclient',

  // client Group
  getClientGroupData: serverBaseUrl + 'group/groups',
  postClientGroupData: serverBaseUrl + "group/insertGroup",
  getClientGroupDataById: serverBaseUrl + 'group/groupById/{groupById}',
  updateClientGroupData: serverBaseUrl + 'group/updateGroup',
  deleteClientGroupData: serverBaseUrl + 'group/deleteGroup',




  // contact
  getContactData: serverBaseUrl + 'contact/contacts',
  postContactData: serverBaseUrl + 'contact/insertContact',

  // service Group
  getServiceceGroupData: serverBaseUrl + 'serviceGroup/serviceGroups',
  postServiceceGroupData : serverBaseUrl + 'serviceGroup/addServiceGroup',
  updateServiceceGroupData : serverBaseUrl + 'serviceGroup/updateServiceGroup',
  getServiceceGroupDataById: serverBaseUrl + 'serviceGroup/serviceGroupById/{ServiceGroupId}',

  // Service Sub Group
  getServiceSubGroupData: serverBaseUrl + 'subserviceGroup/subServiceGroups',
  postServiceceSubGroupData : serverBaseUrl + 'subserviceGroup/addSubServiceGroup',
  updateServiceceSubGroupData : serverBaseUrl + 'subserviceGroup/updateSubServiceGroup',
  getServiceceGroupSubDataById: serverBaseUrl + 'subserviceGroup/SubServiceGroupById/{ServiceSubGroupId}',

  getServicePayData: serverBaseUrl + 'pay/allPay',
  postServicePayData : serverBaseUrl + 'pay/insertPay',
  updateServicePayData : serverBaseUrl + 'pay/updatePay',
  getServicePayDataById: serverBaseUrl + 'pay/payById/{ServicePayId}',


  getServicePaytypeData: serverBaseUrl + 'paytype/allPaytypes',
  postServicePaytypeData : serverBaseUrl + 'paytype/insertPaytype',
  updateServicePaytypeData : serverBaseUrl + 'paytype/updatePaytype',
  getServicePaytypeDataById: serverBaseUrl + 'paytype/paytypeById/{PayTypeId}',



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
