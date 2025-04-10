const express = require('express');
const app = express();
const port = 9000;

import clientesRouter = require('./routes/clientes');
import productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

app.get('/', (req, res) => {
res.send('HOla desde la ruta raiz');
});

app.use(express.static('public'));

app.listen(port, ()) => {
console.log('Servidor corriendo en http://localhost:${port}');
});
