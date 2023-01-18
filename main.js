let workoutArray = [
    {
        name: "pushups",
        bodyweight: "yes"
    },
    {
        name: "pullups",
        bodyweight: "yes"
    },
    {
        name: "plank",
        bodyweight: "yes"
    }
]

let exerciseForm = document.getElementById("exerciseForm")
let exerciseSect = document.getElementById("exerciseSect")
let randomBtn = document.getElementById("randomExerciseBtn")

let addNewExercise = function (event) {
    event.preventDefault()

    let exerciseInput = document.getElementById("exerciseInput").value.toLowerCase()
    let userBodyweightOrNot = document.getElementById("weightType").value.toLowerCase()
    let duplicate
    workoutArray.forEach(exercise => {
        duplicate = exercise.name === exerciseInput
    });
    if (duplicate) {
        // 1. Make this cleaner without using an alert.
        alert("Sorry, that workout already exists in our database, try another!")
    } else {
        workoutArray.push({
            name: exerciseInput,
            bodyweight: userBodyweightOrNot
        })
        exerciseForm.reset()
        // TODO: Confirmation of submission?

    }
    console.log(workoutArray);
}

let chooseRandomExercise = function () {
    let rnd = Math.floor(Math.random() * workoutArray.length)
    if (exerciseSect.innerHTML !== `Name: ${workoutArray[rnd].name}<br> Bodyweight? ${workoutArray[rnd].bodyweight}`) {
        exerciseSect.innerHTML = `Name: ${workoutArray[rnd].name}<br> Bodyweight? ${workoutArray[rnd].bodyweight}`
    } else {
        return
    }
    // TODO: Make the HTML look modern and unique
}

let completeExercise = function () {
    // TODO: Button to complete exercise, effects?

}

let remindUserToWorkout = function () {
    // TODO: Tab alert to get moving

}

let grabExerciseImages = function () {
    // TODO: Find API of exercises, get images, pre-load array

}

randomBtn.addEventListener("click", chooseRandomExercise)
exerciseForm.addEventListener("submit", addNewExercise)