import * as productService from '../services/products.service.js';

const getAllProducts = async (req, res) => {
    const productos = await productService.getAllProducts();
    res.json(productos);
}

const getProductById = async (req, res) => {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        });
    }

    res.json(product);
}

const addProduct = async (req, res) => {
    const { name, brand, category, price, stock, description } = req.body;

    if (!name || !brand || !category || price === undefined || stock === undefined || !description) {
        return res.status(400).json({
            message: 'Todos los campos son obligatorios'
        });
    }

    if (price <= 0) {
        return res.status(400).json({
            message: 'El precio debe ser mayor a 0'
        });
    }

    if (stock < 0) {
        return res.status(400).json({
            message: 'El stock no puede ser negativo'
        });
    }

    const newProduct = await productService.addProduct(req.body);

    res.status(201).json(newProduct);
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const result = await productService.deleteProduct(id);

    if (!result) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        });
    }

    res.json({
        message: 'Producto eliminado correctamente'
    });
}

const updateProduct = async (req, res) => {
    const id = req.params.id;

    const product = await productService.getProductById(id);

    if (!product) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        });
    }

    const updateData = req.body;

    if (Object.keys(updateData).length === 0) {
        return res.status(400).json({
            message: 'Debe enviar al menos un campo para actualizar'
        });
    }

    if (updateData.price !== undefined && updateData.price <= 0) {
        return res.status(400).json({
            message: 'El precio debe ser mayor a 0'
        });
    }

    if (updateData.stock !== undefined && updateData.stock < 0) {
        return res.status(400).json({
            message: 'El stock no puede ser negativo'
        });
    }

    await productService.updateProduct(id, updateData);

    res.json({
        message: 'Producto actualizado correctamente'
    });
}

export {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
};