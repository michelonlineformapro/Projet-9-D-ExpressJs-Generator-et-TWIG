let express = require('express');
let router = express.Router();

//Import du model produits (ou Schema)
let produitsModel = require('../models/produits_model');

//Import du fichier models/livres_model.js
let livresModel = require('../models/livres_model');


/* GET home page. = fonction asyncrhone async + await */
router.get('/', async function(req, res, next) {

  //Boucle de lecture de la collection produit = forEach()
  let produits = await produitsModel.find();

  //Appel de livre Schema
  let livres = await livresModel.find();
  //let produits = res.json()

  //Response + nom de la vue twig = views/index.twig + options clé/valeur produits: (cle pour la vue twig et produits = variable await + Model + find
  res.render('index', {
    title: 'Express page Accueil',
    produits: produits,
    books: livres
  });
});

//Afficher les details d'un livre + recup de id en paramètre url
router.get('/livres/:id', async (request, response) => {
  //On utilise ici la methode findOne + options _id = query id dans url
  let livresDetails = await livresModel.findById({
    '_id': request.params.id,
  })
  //Appel de la vues views/livreDetails.twig + cle / valeur livre = variable livreDetails = model + findOne
  response.render('livreDetails', {
    title: "La page détails",
    livre : livresDetails
  })
})

//Ajouter un livre



//Export du module router utilisé dans app.js
module.exports = router;
