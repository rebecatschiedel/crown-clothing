import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config =  {
    apiKey: "AIzaSyBIzMoqILhCQh38Xok_5CzxTx8_uhkN2Rs",
    authDomain: "crown-db-28f1c.firebaseapp.com",
    databaseURL: "https://crown-db-28f1c.firebaseio.com",
    projectId: "crown-db-28f1c",
    storageBucket: "crown-db-28f1c.appspot.com",
    messagingSenderId: "395546061179",
    appId: "1:395546061179:web:118fcc42b39b31d07a35de"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;