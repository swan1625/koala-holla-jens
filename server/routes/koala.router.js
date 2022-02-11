const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool')
// DB CONNECTION


// GET
koalaRouter.get('/',(req,res)=>{
    let queryText = 'SELECT * FROM "koala";';
    console.log(req.body);
    
    pool.query(queryText)

    .then((result)=>{
        res.send(result.rows);

    }).catch((err)=>{
        console.log('Error making query', queryText, err);
        res.sendStatus(418);
        
    })
})


// POST

koalaRouter.post('/', (req, res) => {
    let koala = req.body
    console.log(koala);
})


// PUT


// DELETE

module.exports = koalaRouter;