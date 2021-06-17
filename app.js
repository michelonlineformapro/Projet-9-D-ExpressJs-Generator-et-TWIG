const express = require('express');

const app = express();

const port = 3000;

//Route de base
app.get('/', (request, response) => {
    response.send('Salut ca marche')
});

app.listen(port, () => {
    console.log(`Ca marche bien sur le port :  ${port}`)
})