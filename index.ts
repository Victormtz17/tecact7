const express = require('express');
import alumnoRoute from './src/routes/alumno'

const app =express();
const port = 3000;
app.use(express.json());

app.use('/alumno',alumnoRoute);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });