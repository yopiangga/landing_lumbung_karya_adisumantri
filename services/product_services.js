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

export async function addProduct(
  name,
  description,
  image,
  ingredients,
  cta,
  packaging
) {
  const db = getFirestore();
  const date = new Date();
  const time = date.getTime();

  return await setDoc(doc(db, "products", time.toString()), {
    name: name ?? "",
    description: description ?? "",
    image: image ?? [],
    ingredients: ingredients ?? [],
    cta: cta ?? "",
    packaging: packaging ?? "",
  });
}

export async function getProducts() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "products"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
}

export async function getProduct(id) {
  const db = getFirestore();

  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // console.log("No such document!");
    return null;
  }
}

export async function editProduct(
  id,
  name,
  description,
  image,
  ingredients,
  cta,
  packaging
) {
  const db = getFirestore();

  return await updateDoc(doc(db, "products", id), {
    name: name ?? "",
    description: description ?? "",
    image: image ?? [],
    ingredients: ingredients ?? [],
    cta: cta ?? "",
    packaging: packaging ?? "",
  });
}

export async function editProductWithoutImage(
  id,
  name,
  description,
  ingredients,
  cta,
  packaging
) {
  const db = getFirestore();

  return await updateDoc(doc(db, "products", id), {
    name: name ?? "",
    description: description ?? "",
    ingredients: ingredients ?? [],
    cta: cta ?? "",
    packaging: packaging ?? "",
  });
}

export async function countProduct() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "products"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push(doc.id);
  });

  return data.length;
}

export async function deleteProduct(id) {
  const db = getFirestore();

  return await deleteDoc(doc(db, "products", id));
}
