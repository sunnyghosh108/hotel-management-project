// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD31RSPP0PKSeN1gxI_AbjmBZf1BEhLFjM",
  authDomain: "auth-test-firebase-bcfe8.firebaseapp.com",
  projectId: "auth-test-firebase-bcfe8",
  storageBucket: "auth-test-firebase-bcfe8.appspot.com",
  messagingSenderId: "60495601189",
  appId: "1:60495601189:web:b013ed0054651e65b529cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;