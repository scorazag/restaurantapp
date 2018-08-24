const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');
const User = require('../models/user');

router.post('/register', (req,res,next) => {

  let newUser = new User({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    celular: req.body.celular,
    edad:req.body.edad,
    email: req.body.email,
    password: req.body.password,
    historial:req.body.historial
  });

  User.addUser(newUser, (err,user) =>{
    if (err) {
      res.json({success:false,msg:'Fallo al registrar'});
    } else {
      res.json({success:true,msg:'Usado registrado'});
    }
  });
});

//autentificacion
router.post('/authenticate', (req,res,next) => {
  const email = req.body.email;
  const password =req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: 'usuario no encontrado'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn : 604800
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            nombre: user.nombre,
            apellido: user.apellido,
            celular: user.celular,
            email: user.email
          }
        });
      } else {
        return res.json({success:false, msg:'contraseña incorrecta'});
      }
    });
  });
});
//Profile
//parametros se protegen con passport.authenticate
router.get('/profile', passport.authenticate('jwt',{session:false}), (req,res,next) => {
  res.json({user: req.user});
});
router.get('/validate', (req,res,next) => {
  res.send("validate");
});

router.post('/updateHisto',(req,res,next) =>{

  const emailt=req.body.email;

  const historial = {
    restaurante:req.body.restaurante,
    tipoCompra: req.body.tipoCompra,
    total: req.body.total,
    ticket: req.body.ticket
  }
  User.update({email:emailt},{$push:{"historial":historial}}).then(function (historial) {
    res.json(historial);
  });
  console.log("imprimeo lo que viene del req");
  console.log(historial);
});

router.post('/updateConfirm',(req,res,next) =>{

  const emailt=req.body.email;

  const historial = {
    restaurante:req.body.restaurante,
    tipoCompra: req.body.tipoCompra,
    total: req.body.total,
    personas: req.body.persona,
    dia:req.body.dia,
    hora:req.body.hora
  }
  User.update({email:emailt},{$push:{"historial":historial}}).then(function (historial) {
    res.json(historial);
  });
  console.log("imprimeo lo que viene del req");
  console.log(historial);
});

module.exports = router;
