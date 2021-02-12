const app = require("./src/config/server");

const connection = require("./src/config/databaseMongo");
/* const connMysql = require("./src/config/databaseMysql"); */

const mensagens = require("./src/models/mensagem");

// select * from produtos
app.get("/products", (req, res) => {
  connMysql.query("SELECT * FROM produtos", (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  let resultado = await mensagens.create({ name, email, subject, message });
  res.json(resultado);
});

app.get("/contact", async (req, res) => {
  const resultado = await mensagens.find();

  res.json(resultado);
});
