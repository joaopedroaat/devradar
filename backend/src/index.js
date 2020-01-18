const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { setupWebsocket } = require('./websocket');

const routes = require('./routes');

const app = express();

const server = http.Server(app); // Extraindo o servidor http do express e isolando na variavel
setupWebsocket(server);

mongoose.connect('mongodb+srv://admin:admin@cluster0-clkud.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

/**
* Tipos de parâmetros:
*  Query Params: request.query
*  Route Params: request.params
*  Body: request.body
* */ 