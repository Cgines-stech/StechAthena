// assets/js/firebase.js
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getAuth, signInAnonymously, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getFirestore, serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { serverTimestamp };

// 🔇 Zero-UI auth: silently sign in
onAuthStateChanged(auth, (u) => {
  if (!u) {
    // Fire and forget; you don't need to await this for the page to work
    signInAnonymously(auth).catch(console.error);
  }
});
