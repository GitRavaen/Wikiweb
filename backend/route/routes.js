var express = require('express');
var router = express.Router();

const Animal = require('../model/Animal');

router.get('/animals', (req, res, next)=>{
    Animal.find(function(err, animals){
        if(err){
            res.json(err);
        }
        else{
            res.json(animals)
        }
    })
});

router.post('/animal', (req, res, next)=>{
    let newAnimal = new Animal({
        animalName: req.body.animalName,
        animalID: req.body.animalID,
        eatsID: req.body.eatsID
    });
    newAnimal.save((err, animal)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Animal has been added successfully'});
        }
    });
});

router.put('/animal/:id', (req, res, next)=>{
    Animal.findOneAndUpdate({animalID: req.params.id}, {
        $set:{
            animalName: req.body.animalName,
        animalID: req.body.animalID,
        eatsID: req.body.eatsID
        }
    },
    function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result)
        }
    });
});

router.delete('/animal/:id', (req, res, next)=>{
    Animal.remove({animalID: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

});
module.exports = router;
