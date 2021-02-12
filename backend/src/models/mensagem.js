const { Schema, model } = require("mongoose");

const ContatoSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const modelo = model("mensagens", ContatoSchema);

module.exports = modelo;
