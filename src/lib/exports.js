import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";// eslint-disable-line

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js"; // eslint-disable-line

export const provider = new GoogleAuthProvider();
export { GoogleAuthProvider };
export {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"; // eslint-disable-line
