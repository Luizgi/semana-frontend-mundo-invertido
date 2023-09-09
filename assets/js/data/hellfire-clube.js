import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './firebase.js'

export async function subscribeToHellfireClube(subscribe){
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubeCollection, subscribe)
    return docRef.id
}