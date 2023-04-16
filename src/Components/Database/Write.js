import { db } from "../../firebaseUtils";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

export async function saveDB(newAppointment) {
  try {
    const docRef = await addDoc(collection(db, "appointments"), newAppointment);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}

export async function updateDB(id, data) {
  try {
    console.log(data)
    const docRef = doc(db, "staffs", id);
    await updateDoc(docRef, data);
    return true;
  } catch {
    return false;
  }
}

export async function deleteTimeSlot(id,data) {
  try {
    const docRef = doc(db, "staffs", id);
    await updateDoc(docRef,data);
    return true;
  } catch {
    return false;
  }
}
