// assets/js/coursesessions.store.js
import { db } from "./firebase.js";
import {
  collection, doc, addDoc, setDoc, getDoc, getDocs,
  query, where, orderBy, limit, deleteDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const COL = collection(db, "courseSessions");

export async function listCourseSessions({ program = null, course = null, max = 50 } = {}) {
  let qy;

  // default: recent sessions
  if (!program && !course) {
    qy = query(COL, orderBy("updatedAt", "desc"), limit(max));
    const snaps = await getDocs(qy);
    const out = [];
    snaps.forEach(d => out.push({ id: d.id, ...d.data() }));
    return out;
  }

  // program and/or course filters (try with orderBy first, then fallback)
  try {
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
    // If Firestore says "requires an index", do a no-index version and sort client-side
    const needsIndex = e?.code === "failed-precondition" && /requires an index/i.test(e.message || "");
    if (!needsIndex) throw e;

    // Fallback queries without orderBy (no composite index needed)
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

    // Client-side sort by updatedAt desc
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
;
      return db - da;
    });

    return out.slice(0, max);
  }
}
