// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_NdT6IKVPwR3LPgZx2zyZOUkl3J2PTrM",
  authDomain: "ccl-project-4c287.firebaseapp.com",
  projectId: "ccl-project-4c287",
  storageBucket: "ccl-project-4c287.appspot.com",
  messagingSenderId: "323463354244",
  appId: "1:323463354244:web:6e1bdcea1697cf1db5efd1",
  measurementId: "G-2WMW6X47C4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;