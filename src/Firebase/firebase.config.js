// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyA-xvz9FM2pJsUlg9vJ0hKQ5ZxKwyDtLn4",
  //   authDomain: "doll-topia.firebaseapp.com",
  //   projectId: "doll-topia",
  //   storageBucket: "doll-topia.appspot.com",
  //   messagingSenderId: "226267134825",
  //   appId: "1:226267134825:web:c45278b16f45e5add3dbf8",
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
