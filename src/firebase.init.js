// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBRY_RcJ5kThS_afBrt-Ahde7hU5fdHYWQ",
  // authDomain: "genius-car-services-877ab.firebaseapp.com",
  // projectId: "genius-car-services-877ab",
  // storageBucket: "genius-car-services-877ab.appspot.com",
  // messagingSenderId: "541941550961",
  // appId: "1:541941550961:web:178db3aeb2cacb12e0f0d0"

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;