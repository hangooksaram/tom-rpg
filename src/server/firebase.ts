import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAJOnRSM91EGjZ5mE4MTifMvgETiMRy9Qc',
  authDomain: 'tom-rpg-db.firebaseapp.com',
  projectId: 'tom-rpg-db',
  storageBucket: 'tom-rpg-db.appspot.com',
  messagingSenderId: '682024612709',
  appId: '1:682024612709:web:9ae6b46fe7880e9a00278c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
