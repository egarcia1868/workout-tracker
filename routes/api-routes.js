const db = require("../models");
const mongojs =require("mongojs");

module.exports = function(app) {

  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .sort({ day: -1 }).limit(1)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.collection.updateOne({ 
      _id: mongojs.ObjectId(req.params.id) 
    }, {
      $push: {
        exercises: req.body
      }
    },
    function(err, data) {
      if (err) {
        res.send(err);
      } else {
        console.log("put success: ");
        res.send(data);
      }
  });
})

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts/bulk", (req, res) => {
    db.Workout.insertMany(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};