const mongoose = require('mongoose');
const config = require('../config/database');

const RestauranteSchema = mongoose.Schema({
	tipo: {
		type: 'String'
	},
	restaurante: {
		type: [
			'Mixed'
		]
	}
});

const Restaurante = module.exports = mongoose.model('Restaurante',RestauranteSchema);


module.exports.addRess = function (newRes,callback) {
	console.log("añadiendo Res");
	console.log(newRes);
	newRes.save(callback);
}

module.exports.getTipos = function(callback) {
	console.log("ejecutando GETTIPOS");
}

module.exports.getResTipos = function(tipo,callback) {
	const query = {tipo:tipo}
	console.log("desde fubion");
	console.log(query);
	Restaurante.findOne(query,callback);
}

module.exports.getMenuRes = function(restaurante,callback) {
	console.log("funcion recupera el menu de un restaurante");
}
