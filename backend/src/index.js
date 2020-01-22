const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./Routes');

const app = express();

mongoose.connect('mongodb+srv://caffeee:caffeee@cluster0-7abdf.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros: 

//Query params: req.query (Filtros, ordennação, paginação, ...)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.use(express.json());
app.use(routes);

app.listen(3333);

