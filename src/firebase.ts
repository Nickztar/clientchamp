// import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}
export const config: FirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};

// firebase.initializeApp(config);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
/*

//Take a descision on if we should use firebase. Not to sure atm....

*/
