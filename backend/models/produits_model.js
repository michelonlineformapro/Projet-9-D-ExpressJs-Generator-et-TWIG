const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Mapping la collection produits mongodb->ecommerce->produits
let produitsSchema = new Schema({
    nom: {type: String},
    prix: {type: Number}
});

//Export du module a importer dans routes/index.js
module.exports = mongoose.model('produits', produitsSchema, 'produits')