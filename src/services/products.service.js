import * as productModel from '../models/products.model.js';// Importar los modelos de la base de datos

// let productos = [
//     {  id: 1, name: "Pastillas de freno",brand: "Ferodo",category: "Frenos",price: 25000,stock: 15,description : "Pastillas de freno de alta calidad" },
//     {  id: 2, name: "Aceite de motor",brand: "Mobil",category: "Lubricantes",price: 15000,stock: 30,description : "Aceite de motor sintético" },
//     {  id: 3, name: "Filtro de aire",brand: "K&N",category: "Filtros",price: 12000,stock: 20,description : "Filtro de aire de alto rendimiento" }
// ];

const getAllProducts = async () => {
    return  productModel.getAllProducts();
}

const getProductById = async (id) => {
    return  productModel.getProductById(id);
}

const addProduct = async (product) => {
    const newProduct = await productModel.addProduct(product);
    return newProduct;
}

const deleteProduct = async (id) => {
    const product = await productModel.getProductById(id);
    if (!product) {
       return null; // Retornar null si el producto no existe
    }
    return await productModel.deleteProduct(id);
}

const updateProduct = async (id, updateData) => {
    const updatedProduct = await productModel.updateProduct(id, updateData);
    return updatedProduct;
}   


export { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct };// Exportar la función para obtener todos los productos