const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseTypes = ["resistance", "cardio"];

const workoutSchema = new Schema({
  exercises: [{
    type: {
      type: String,
      required: "Please select if this is a resistance or cardio workout.",
      dropdowns: exerciseTypes
    },
    name: {
      type: String,
      required:  "Please enter the workout name.",
      trim: true
    },
    duration: {
      type: Number,
      required: "For how many minutes did you do this workout?"
    },
    weight: {
      type: Number,
      default: null
    },
    reps: {
      type: Number,
      default: null
    },
    sets: {
      type: Number,
      default: null
    }
  }],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
