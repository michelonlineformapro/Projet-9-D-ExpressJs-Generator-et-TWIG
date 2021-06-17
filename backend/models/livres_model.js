const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Mapper ma collection mongodb->ecommerce->livres
let livresSchema = new Schema({
    nomLivre: {type:String},
    descriptionLivre: {type:String},
    prixLivre: {type:Number},
    imageLivre:{type: String},
});


module.exports = mongoose.model('livres', livresSchema, 'livres');

