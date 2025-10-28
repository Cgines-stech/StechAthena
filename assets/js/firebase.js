// assets/js/firebase.js
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getFirestore,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// --- Init ---
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { serverTimestamp };

// --- Zero-UI Anonymous Auth ---
onAuthStateChanged(auth, (user) => {
  // Debug line so you can see when auth resolves:
  console.log("auth state:", user ? user.uid : null);

  // If not signed in yet, silently sign in anonymously
  if (!user) {
    signInAnonymously(auth).catch((e) => {
      console.error("anon sign-in failed:", e.code, e.message);
    });
  }
});

// Optional: expose for console poking (DevTools)
window.__fb = { auth, db };
