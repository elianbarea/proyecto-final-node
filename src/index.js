import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();// Cargar variables de entorno desde el archivo .env
const app = express();// Crear una instancia de la aplicación Express
const PORT = process.env.PORT || 3000;// Establecer el puerto desde las variables de entorno o usar 3000 por defecto
app.use(cors());
app.use(bodyParser.json());
app.use('/products', productsRoutes);
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de MotoParts!');
});

app.use((req,res) => {//middleware para manejar rutas no encontradas
  res.status(404).json({error: "Ruta no encontrada"});
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});