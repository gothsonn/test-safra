// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://gateway.marvel.com/v1/public/',
  apiKey: '',
  settings: {
    appErrorPrefix: '[Angular Heroes Error] ',
    appTitle: 'Angular Heroes',
    version: '0.0.0',
    charactersLimit: 20
  },
  firebaseConfig: {
    apiKey: "",
    authDomain: "test-solutis.firebaseapp.com",
    projectId: "test-solutis",
    storageBucket: "test-solutis.appspot.com",
    messagingSenderId: "309300264176",
    appId: ""
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.