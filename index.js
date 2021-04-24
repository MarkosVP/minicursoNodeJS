// Importou as dependencias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Instanciou o projeto usando o Framework Express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Defino as rotas do projeto
var router = express.Router();

// Indico que a chamada crua vai retornar essa resposta
router.get('/', function(req, res){
    res.json({
        message: "TOPZERA"
    });
});

// Defino uma rota principal (Tudo da API vai usar '/api' no início)
app.use('/api', router);

// Definiu a porta de acesso do projeto
const APP_PORT = 3000;

// Instânciou o projeto e executou
app.listen(APP_PORT, () => {
    console.log('Server running!');
});