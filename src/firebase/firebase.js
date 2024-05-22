import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-ICQWLEa3BR42pVIqyvDau8g7GSiOd0",
  authDomain: "my-auth-app-370b0.firebaseapp.com",
  projectId: "my-auth-app-370b0",
  storageBucket: "my-auth-app-370b0.appspot.com",
  messagingSenderId: "50425659644",
  appId: "1:50425659644:web:c6f4d44cc10e7995235779",
  measurementId: "G-0NJEB73807",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
