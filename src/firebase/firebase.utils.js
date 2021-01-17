import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC7Lwu5zFh-0zzBEWGjDm3cX4oB4yJ8Z1k",
    authDomain: "crwn-db-651ac.firebaseapp.com",
    projectId: "crwn-db-651ac",
    storageBucket: "crwn-db-651ac.appspot.com",
    messagingSenderId: "343252050958",
    appId: "1:343252050958:web:27542510a67c841cefc85f"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
