// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCi29EP15eK_aKVNcnMG2cS7IkARSfJ2Js',
  authDomain: 'rn-firebase-auth-7bad8.firebaseapp.com',
  projectId: 'rn-firebase-auth-7bad8',
  storageBucket: 'rn-firebase-auth-7bad8.appspot.com',
  messagingSenderId: '671619094945',
  appId: '1:671619094945:web:e434a3ec86fac2626413e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {auth, createUserWithEmailAndPassword};
