let express = require('express');
let router = express.Router();

//Import du model produits (ou Schema)
let produitsModel = require('../models/produits_model');


/* GET home page. = fonction asyncrhone async + await */
router.get('/', async function(req, res, next) {

  //Boucle de lecture de la collection produit = forEach()
  let produits = await produitsModel.find();
  //let produits = res.json()

  //Response + nom de la vue twig = views/index.twig + options clé/valeur produits: (cle pour la vue twig et produits = variable await + Model + find
  res.render('index', {
    title: 'Express page Accueil',
    produits: produits
  });
});

//Ici appel de la vue utilisateurs.twig sur la route localhost:3000/utilisateurs
router.get('/utilisateurs', (request, response) => {
  response.render('utilisateurs', {
    title: "La page"
  })
})


//Export du module router utilisé dans app.js
module.exports = router;
