const express = require('express');
const model = require('../models/model');
const router = express.Router();
// Get All API



router.get('/', (req,res,next)=> {
    res.status(200).json("this for the /api")
})

router.get('/getAll', (req, res)=> {
    res.status(200).json("this for the /api/get")
})

// Get by ID API

router.get('/getone', (req, res)=> {
    res.send('Getting all the data');
})


//Post API

router.post('/post', async(req, res)=> {

    const data = new model({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save();

        res.status(200).json(dataToSave)

    }
    catch(e){
        res.status(400).json({
            message: e.message
        })
    }
})


// PUT API

router.put('/put', (req, res)=> {
    res.send('Getting all the data');
})

// DELETE API

router.delete('/delet', (req, res)=> {
    res.send('Getting all the data');
})



module.exports = router;