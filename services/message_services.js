import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

export async function addMessage(name, email, text) {
  const db = getFirestore();
  const date = new Date();
  const time = date.getTime();

  return await setDoc(doc(db, "messages", time.toString()), {
    name: name ?? "",
    email: email ?? "",
    text: text ?? "",
  });
}

export async function getMessages() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "messages"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
}

export async function getMessage(id) {
  const db = getFirestore();

  const docRef = doc(db, "messages", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // console.log("No such document!");
    return null;
  }
}

export async function editMessage(id, name, email, text) {
  const db = getFirestore();

  return await updateDoc(doc(db, "messages", id), {
    name: name ?? "",
    email: email ?? "",
    text: text ?? "",
  });
}

export async function countMessage() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "messages"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push(doc.id);
  });

  return data.length;
}

export async function deleteMessage(id) {
  const db = getFirestore();

  return await deleteDoc(doc(db, "messages", id));
}
