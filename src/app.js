const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
const initModels = require("./models/initModels");
const { 
  RouterPaises,
  RouterPersonas,
  RouterRecervas,
  RouterTarifas,
  RouterTikets, 
} = require("./routes");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels();

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  

app.get('/', (req, res) => {
  res.status(200).json('Respuesta exitosa')
});
  
app.use("/api/v1", RouterPaises);
app.use("/api/v1", RouterPersonas);
app.use("/api/v1", RouterRecervas);
app.use("/api/v1", RouterTarifas);
app.use("/api/v1", RouterTikets);


app.use(handleError);
module.exports = app;