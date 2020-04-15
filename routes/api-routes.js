const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { day: req.body.day }, {exercises: req.body.exercises}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts/bulk", ({ body }, res) => {
    db.Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};