import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import db from './firebase';

interface EmailData {
    email: string;
}

const postEmail = async (emailData: EmailData): Promise<void> => {

    try {
        const docRef = await addDoc(collection(db, "emails_Newsletter"), emailData);
        console.log("Documento agregado exitosamente: ", docRef.id);
      } catch (e) {
        console.error("Error al agregar docuemnto: ", e);
      }
};

export default postEmail;
