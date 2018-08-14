const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

const app = express();
const users = require('./routes/users');
const restaurantes = require('./routes/restaurantes');
const port = 3000;

//conexion a base de datos en mongoDB
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log("Conectado"+config.database);
});
mongoose.connection.on('error', () => {
  console.log("Error:"+err);
});

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//Passport Midelware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/restaurantes',restaurantes);

app.get('/',(req,res) => {
  res.send("hola desde server");
  console.log("hola desde el servidor");
})

app.listen(port,() => {
  console.log("Servidor Levantado");
});
