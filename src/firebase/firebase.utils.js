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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

     return userRef;
  };

 


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;