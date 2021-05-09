import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAsLF-5dEsFF5KuUxwFC4_ajz8hWr8yaDE",
    authDomain: "atomy-ecommerce-app.firebaseapp.com",
    projectId: "atomy-ecommerce-app",
    storageBucket: "atomy-ecommerce-app.appspot.com",
    messagingSenderId: "745026737724",
    appId: "1:745026737724:web:7bd97e8a5ce76b3d6a1539",
    measurementId: "G-TGH5SCGT65"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;