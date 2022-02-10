const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// DB CONNECTION


// GET
router.get('/',(req,res)=>{
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


// PUT


// DELETE

module.exports = router;