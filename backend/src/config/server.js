const express = require("express"); // importando a função express
const cors = require("cors"); // importando a função cors

const app = express(); // criando o servidor com express e seus respectivos métodos

app.use(express.json()); // indicando que vou usar o express no formato json
app.use(cors()); // indicando o uso da funcionalidade cors

app.listen(3333, () => {
  console.log("Servidor Ativo!");
});

module.exports = app;
