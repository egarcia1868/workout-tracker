const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{
    type: {
      type: String,
    },
    name: {
      type: String,
      trim: true
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }],
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  }
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
