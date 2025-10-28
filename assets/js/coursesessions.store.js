// assets/js/coursesessions.store.js
import { db, auth, serverTimestamp } from "./firebase.js";
import {
  collection, doc, addDoc, setDoc, getDoc, getDocs,
  query, where, orderBy, limit, deleteDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Collection
const COL = collection(db, "courseSessions");

// Save (create or update)
export async function saveCourseSession(payload, id = null) {
  const u = auth.currentUser;
  if (!u) throw new Error("You must be signed in to save.");

  const base = { ...payload, updatedAt: serverTimestamp() };

  if (!id) {
    const docRef = await addDoc(COL, {
      ...base,
      createdAt: serverTimestamp(),
      createdBy: { uid: u.uid, email: u.email || null, displayName: u.displayName || null },
    });
    return docRef.id;
  } else {
    await setDoc(doc(db, "courseSessions", id), base, { merge: true });
    return id;
  }
}

export async function getCourseSession(id) {
  const snap = await getDoc(doc(db, "courseSessions", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function listCourseSessions({ program = null, course = null, max = 50 } = {}) {
  let qy = query(COL, orderBy("updatedAt", "desc"), limit(max));
  if (program && course) {
    qy = query(COL,
      where("program", "==", program),
      where("course", "==", course),
      orderBy("updatedAt", "desc"),
      limit(max)
    );
  } else if (program) {
    qy = query(COL, where("program", "==", program), orderBy("updatedAt", "desc"), limit(max));
  }
  const out = [];
  const snaps = await getDocs(qy);
  snaps.forEach(d => out.push({ id: d.id, ...d.data() }));
  return out;
}

export async function deleteCourseSession(id) {
  await deleteDoc(doc(db, "courseSessions", id));
}
