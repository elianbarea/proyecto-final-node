import {db} from '../config/firebase.js';
import {collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';

const productsCollection = collection(db, "products")


const getAllProducts = async() => {
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
         ...doc.data()}));
    return products;
};

const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
}

const addProduct = async (productData) => {
    const newProductRef = await addDoc(productsCollection, productData);
    return { id: newProductRef.id, ...productData };
};

const updateProduct = async (id, updateData) => {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, updateData);

    return true;
};

const deleteProduct = async (id) => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    return true;
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };