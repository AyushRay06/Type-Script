enum workout {
  push = "Chest Shoulder triceps",
  pull = "Back Rear-Delt biceps ",
  legs = "Legs & ABS",
}

function workoutPlan(whichPart: workout): void {
  if (workout.push) {
    console.log(`We are hoin to hit ${workout.push}`)
    return
  }
  if (workout.pull) {
    console.log(`We are going to hit ${workout.pull}`)
  } else {
    console.log(`we are going to hit ${workout.legs}`)
  }
}

workoutPlan(workout.push)
