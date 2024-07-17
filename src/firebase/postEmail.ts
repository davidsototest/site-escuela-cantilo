
import 'firebase/compat/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase';

interface EmailData {
    email: string;
}

const postEmail = async (emailData: EmailData): Promise<void> => {

    try {
        await addDoc(collection(db, "emails_Newsletter"), emailData);
      } catch (e) {
        console.error("Error al agregar docuemnto: ", e);
        throw e;
      }
};

export default postEmail;
