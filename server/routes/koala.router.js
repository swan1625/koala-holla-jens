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
    let koala = req.body.koala
    console.log(koala);
    

    let sqlText = `
    INSERT INTO "koala" ("name", "age", "gender", "ready_to_transfer", "notes") 
    VALUES ( $1, $2, $3, $4, $5);`
    
    let koalaStuff = [koala.name, koala.age, koala.gender, koala.readyForTransfer, koala.notes]
    pool.query(sqlText, koalaStuff)
        .then(results => {
            res.sendStatus(201)
        }).catch(err => {
            console.log('this Koala is hecked', err);
            res.sendStatus(500)
        })
})


// PUT


// DELETE

module.exports = koalaRouter;