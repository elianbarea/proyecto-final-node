import { Router } from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct , updateProduct} from '../controllers/products.controller.js';// Importar la función para obtener todos los productos desde el controlador
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();// Crear una instancia del enrutador de Express

// Definir la ruta para obtener todos los productos
router.get('/',getAllProducts);// Llamar a la función para obtener todos los productos)
router.get('/:id', getProductById);// Llamar a la función para obtener un producto por su ID
router.post('/', authMiddleware, addProduct);// Llamar a la función para agregar un nuevo producto
router.delete('/:id', authMiddleware, deleteProduct);// Llamar a la función para eliminar un producto por su ID 
router.put('/:id', authMiddleware, updateProduct);// Llamar a la función para actualizar un producto por su ID

export default router;// Exportar el enrutador para que pueda ser utilizado en otros archivos