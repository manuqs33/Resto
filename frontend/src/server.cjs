const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// Ruta para servir los archivos estáticos
app.use(express.static(path.join(__dirname, '../build')));

// Ruta para servir el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3000, function() {
    console.log('Running on http://localhost:3000/');
});