import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf8XLXrV89I052lEF9fdB6fF3aw65JO48",
  authDomain: "crwn-clothing-db-53733.firebaseapp.com",
  projectId: "crwn-clothing-db-53733",
  storageBucket: "crwn-clothing-db-53733.appspot.com",
  messagingSenderId: "536587992233",
  appId: "1:536587992233:web:9c19899db0a01c8ee23db8",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
