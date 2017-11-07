const Home = require('../templates/home.js');
const Article = require('../templates/article.js');
const fetch = require('node-fetch');

const port = process.env.PORT || 8000;
module.exports = (app) => {
    app.get('/', (req, res) => {
        fetch(`http://localhost:${port}/api/home/`)
        .then( response => response.json() )
        .then( json => {
            let home = new Home(json);
            res.send(home.render());
        }).catch( err => console.log(`didn't work`, err));

    });

    app.get('/article/:id', (req,res) => {
        const {id} = req.params;
        fetch(`http://localhost:${port}/api/article/${id}`)
        .then( response => response.json() )
        .then( json => {
            const article = new Article(json);
            res.send(article.render());
        }).catch( err => console.log(`didn't work`, err));
    });
};
