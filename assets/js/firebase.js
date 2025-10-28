// assets/js/firebase.js
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,   // ✅ must be imported here
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getFirestore,
  serverTimestamp
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

import { signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

onAuthStateChanged(auth, u => console.log("auth state:", u ? u.uid : null));
signInAnonymously(auth)
  .then(res => console.log("anon signed-in uid:", res.user.uid))
  .catch(e => console.error("anon sign-in failed:", e.code, e.message));

// optional: expose for console poking
window.__fb = { auth, db };
