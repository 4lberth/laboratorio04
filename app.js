import express from 'express';
import clientesRouter from './routes/clientes.js';
import productosRouter from './routes/productos.js';

const app = express();
const port = 9000;

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => {
  res.send('Hola desde la ruta raiz');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

