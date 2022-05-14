import {db} from './firebase'

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const serialize = (docs) => {
    if(!Array.isArray(docs)) return []
    return docs.map((doc) => ({...doc.data(), id: doc.id}))
}

export const plantTypes = {
    'apple': {
        displayName: 'Apple Crops'
    },
    'corn': {
        displayName: 'Corn Crops',
    }
}

export class FireService {

    landCollectionRef = null;

    constructor(collectionName) {
        this.landCollectionRef = collection(db, collectionName)
    }

    create = async (landObj) => {
        return await addDoc(this.landCollectionRef, landObj)
    }

    update = async (id, landObj) => {
        const landDoc = doc(db, 'lands', id)
        return await updateDoc(landDoc,  landObj)
    }

    delete = async (id) => {
        const landDoc =  doc(db, 'lands', id)
        return await deleteDoc(landDoc)
    }

    getAll = async () => {
        return serialize((await getDocs(this.landCollectionRef)).docs)
    }

    get = async (id) => {
        const landDoc = doc(db, 'lands', id)
        return (await getDoc(landDoc)).data()
    }

}