const express = require("express");


const router = express.Router();

//get all
router.get("/", (req, res) => {
  res.json({
    mssg: "get all workouts",
  });
});

//get single workout
router.get("/:id", (req, res) => {
  res.json({
    mssg: "get a single workout",
  });
});
//post
router.post("/",async (req, res) => {
    const {title,load,reps} =req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
//   res.json({
//     mssg: "post a workout",
//   });
});

//delete
router.delete("/:id", (req, res) => {
  res.json({
    mssg: "delete a workout",
  });
});
//update
router.patch("/:id", (req, res) => {
  res.json({
    mssg: "update a workout",
  });
});
module.exports = router;
