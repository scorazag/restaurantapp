const express = require('express');
const router = express.Router();

const config = require('../config/database');
const Restaurante = require('../models/restaurante');


router.post('/ressAdd',(req,res,next) => {

  let newRes = new Restaurante({
    tipo:req.body.tipo,
    restaurante:req.body.restaurante
  });

  Restaurante.addRess(newRes,(err,rest) => {
    if (err) {
    res.json({success:false,msg:'Fallo al registrar'});
  } else {
    res.json({success:true,msg:'Usado registrado'});
  }
  })
});


//selecciona todos los restaurantes de u tipo
router.get('/Tipo',(req,res,next) => {

  Restaurante.find({},{tipo:1}).then(function (restaurante) {
    //res.send(restaurante);
    res.json({
      restaurante
    });
  });
});

//selecciona todos los restaurantes de u tipo
router.post('/resTipo',(req,res,next) => {
  const tipo = req.body.tipo;
  console.log(tipo);
  Restaurante.find({tipo:tipo},{"restaurante.nombreRestaurante":1,"restaurante.direccion":1}).then(function (restaurante) {
  res.json({restaurante});

  });
});

//selecciona menu de un restaurante
router.post('/resNom',(req,res,next) => {
  const nombreRestaurante = req.body.nombreRestaurante;
  console.log(nombreRestaurante);
  Restaurante.find({"restaurante":{$elemMatch:{"nombreRestaurante":nombreRestaurante}}},{"restaurante.menu.$": 1}).then(function (restaurante) {
    //res.send(restaurante);
    res.json({restaurante})
  });
});


module.exports = router;
