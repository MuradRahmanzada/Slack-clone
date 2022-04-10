import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "slack-clone-e2db0.firebaseapp.com",
    projectId: "slack-clone-e2db0",
    storageBucket: "slack-clone-e2db0.appspot.com",
    messagingSenderId: "866229231784",
    appId: "1:866229231784:web:206dd9ce4f0a2a9f07629d",
    measurementId: "G-0P12349WPQ"
};

console.log(process.env)

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;