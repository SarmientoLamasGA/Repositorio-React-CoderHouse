import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEXdox15Str8wOyhf-sg6dxSp5JomXIUg",
  authDomain: "randomshop-reactch.firebaseapp.com",
  projectId: "randomshop-reactch",
  storageBucket: "randomshop-reactch.appspot.com",
  messagingSenderId: "221631455976",
  appId: "1:221631455976:web:fc97c0e73442ad996adf5d",
};
const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;
export { getFirestore };
