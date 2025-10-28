// assets/js/coursesessions.store.js
import { db, auth, serverTimestamp } from "./firebase.js";
import {
  collection, doc, addDoc, setDoc, getDoc, getDocs,
  query, where, orderBy, limit, deleteDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Collection ref
const COL = collection(db, "courseSessions");

/**
 * Create or update a course session.
 * - If id is null/undefined → creates a new doc and returns its id
 * - If id is provided → updates/merges and returns the same id
 * - No sign-in required; metadata includes user info if available
 */
export async function saveCourseSession(payload, id = null) {
  const u = auth.currentUser || null;

  const base = {
    ...payload,
    updatedAt: serverTimestamp(),
  };

  if (!id) {
    const docRef = await addDoc(COL, {
      ...base,
      createdAt: serverTimestamp(),
      createdBy: u
        ? { uid: u.uid || null, email: u.email || null, displayName: u.displayName || null }
        : null,
    });
    return docRef.id;
  } else {
    await setDoc(doc(db, "courseSessions", id), base, { merge: true });
    return id;
  }
}

/** Read a single session by id */
export async function getCourseSession(id) {
  const snap = await getDoc(doc(db, "courseSessions", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/**
 * List sessions with optional filters.
 * Tries indexed queries first; if Firestore requires a composite index,
 * falls back to client-side sorting.
 */
export async function listCourseSessions({ program = null, course = null, max = 50 } = {}) {
  let qy;

  // Default: recent sessions
  if (!program && !course) {
    qy = query(COL, orderBy("updatedAt", "desc"), limit(max));
    const snaps = await getDocs(qy);
    const out = [];
    snaps.forEach(d => out.push({ id: d.id, ...d.data() }));
    return out;
  }

  try {
    // Indexed version (best performance)
    if (program && course) {
      qy = query(
        COL,
        where("program", "==", program),
        where("course", "==", course),
        orderBy("updatedAt", "desc"),
        limit(max)
      );
    } else if (program) {
      qy = query(
        COL,
        where("program", "==", program),
        orderBy("updatedAt", "desc"),
        limit(max)
      );
    } else {
      qy = query(
        COL,
        where("course", "==", course),
        orderBy("updatedAt", "desc"),
        limit(max)
      );
    }

    const snaps = await getDocs(qy);
    const out = [];
    snaps.forEach(d => out.push({ id: d.id, ...d.data() }));
    return out;
  } catch (e) {
    // Fallback: no orderBy → no composite index needed; sort on client
    const needsIndex = e?.code === "failed-precondition" && /requires an index/i.test(e.message || "");
    if (!needsIndex) throw e;

    if (program && course) {
      qy = query(COL, where("program", "==", program), where("course", "==", course), limit(max));
    } else if (program) {
      qy = query(COL, where("program", "==", program), limit(max));
    } else {
      qy = query(COL, where("course", "==", course), limit(max));
    }

    const snaps = await getDocs(qy);
    const out = [];
    snaps.forEach(d => out.push({ id: d.id, ...d.data() }));

    // Safe sort by updatedAt desc
    out.sort((a, b) => {
      const da = (() => {
        const v = a.updatedAt;
        if (!v) return 0;
        if (typeof v.toMillis === "function") return v.toMillis();
        const t = new Date(v).getTime();
        return isNaN(t) ? 0 : t;
      })();

      const db = (() => {
        const v = b.updatedAt;
        if (!v) return 0;
        if (typeof v.toMillis === "function") return v.toMillis();
        const t = new Date(v).getTime();
        return isNaN(t) ? 0 : t;
      })();

      return db - da;
    });

    return out.slice(0, max);
  }
}

/** Delete a session */
export async function deleteCourseSession(id) {
  await deleteDoc(doc(db, "courseSessions", id));
}
