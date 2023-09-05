// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { player } from "../object/moving/Player";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJOnRSM91EGjZ5mE4MTifMvgETiMRy9Qc",
  authDomain: "tom-rpg-db.firebaseapp.com",
  projectId: "tom-rpg-db",
  storageBucket: "tom-rpg-db.appspot.com",
  messagingSenderId: "682024612709",
  appId: "1:682024612709:web:9ae6b46fe7880e9a00278c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const savePlayerData = () => {
  const playerData = player;
  fetch("https://tom-rpg-db-default-rtdb.firebaseio.com/player.json", {
    method: "put",
    body: JSON.stringify({ player: playerData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPlayerData = async () => {
  const res = await fetch(
    "https://tom-rpg-db-default-rtdb.firebaseio.com/player.json"
  );
  return res.json();
};
