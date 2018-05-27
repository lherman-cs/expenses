// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB9gHpFUYP4fX5T0Z5NLyQRy_zKbe1XvmU",
    authDomain: "expenses-a29e3.firebaseapp.com",
    databaseURL: "https://expenses-a29e3.firebaseio.com",
    projectId: "expenses-a29e3",
    storageBucket: "expenses-a29e3.appspot.com",
    messagingSenderId: "24427628365"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
