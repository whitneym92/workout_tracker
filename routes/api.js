const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();

//get request
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

//post request
router.post("/api/workouts", (req,res) => {
    Workout.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

//put request
router.put("api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body} }, {new: true})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

//post request
router.post("api/workouts/range", (req,res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

//get request
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});
module.exports = router;