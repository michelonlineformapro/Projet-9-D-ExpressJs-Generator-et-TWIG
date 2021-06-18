//DATA SOURCE : https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073
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
    title: 'ExpressJS + TWIG',
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
router.post('/ajouter-livre', async (request, response) =>{
  let saveLivre = new livresModel(request.body);
  saveLivre.save()
      .then(item => {
        response.redirect('/')
        console.log(item)
      })
      .catch(err => {
        response.status(400).send('erreur ajout du livre' + err)
      })
})

//Supprimer un livre
router.get('/livres/supprimer/:id', async (request, response) =>{
  let deleteLivre = await livresModel.findByIdAndRemove({
    '_id': request.params.id,
  })
    console.log(deleteLivre)

    response.render('livreSupprimer', {
        title: "livre supprimer",
        deleteLivre: deleteLivre
    })

})


//Export du module router utilisé dans app.js
module.exports = router;
