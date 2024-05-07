import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfRWuenxmepp-tUpM30rLI8UFkPIDemZY",
  authDomain: "uno-game-2f385.firebaseapp.com",
  projectId: "uno-game-2f385",
  storageBucket: "uno-game-2f385.appspot.com",
  messagingSenderId: "819871704815",
  appId: "1:819871704815:web:afbfb5647cd1366a0b1d1a",
  measurementId: "G-MP2YG03R2Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);