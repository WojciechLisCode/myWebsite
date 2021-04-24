const btn = document.querySelector("#btn");
const baseData = document.querySelector("#baseData")
const calculations = document.querySelector("#calculations")
const diet = document.querySelector("#diet")


console.log(results);


btn.addEventListener( "click", function() {

    const weightInKg = document.querySelector("#weight").value;
    const heightInM = document.querySelector("#height").value;
    const age = document.querySelector("#age").value;
    const genderMale = document.querySelector("#genderMale").checked;
    const exercise = document.querySelector("#exercise").checked;

    function bmiCalculator(weight, height) {
        bmi = Math.round(weight / (height * height));
        console.log(bmi)
        return bmi
    }

    bmi = bmiCalculator(weightInKg, heightInM);
    const bmiMessage = bmi >= 18.5 && bmi <= 25 ? "within healthy range" : bmi < 18.5 ? "below healthy range (underweight)" : "above healthy range (overweight)"; 
    const idealWeight = Math.round(22.5 * (heightInM *heightInM));
    const genderFactor = genderMale ? 50 : -150;
    const bmr = 10 * weightInKg + (6.25 * (heightInM * 100)) - 5 * age + genderFactor;
    const exerciseFactor = exercise ? 1.6 : 1.4;
    const caloriesBurnedDaily = Math.round(bmr * exerciseFactor);
    const weightDifference = weightInKg - idealWeight;
    const weightMessage = idealWeight < weightInKg ? "above ideal weight of" : idealWeight > weightInKg ? "below ideal weight of" : "having ideal weight of"
    const weeksToGoal = Math.abs(weightDifference / 0.5);
    let dietCalories = "";
    dietCalories = weightDifference < 0 ? dietCalories = caloriesBurnedDaily + 500 : dietCalories = caloriesBurnedDaily - 500;

    if (weightInKg === "" || heightInM === "" || age === ""){
            calculations.innerHTML = "Enter weight, heigth and age!!";
            diet.innerHTML = "";
        } else {
            baseData.innerHTML = `<p>BASE DATA:</p>Weight: ${weightInKg} Age: ${age}. Height: ${heightInM}.   Gender: ${genderMale ? "Male" : "Female"}`

            calculations.innerHTML = `<p>CALCULATIONS:</p>Your BMI is equal to ${bmi} and its ${bmiMessage} of 18.5 to 25. <br>` + 
                `Based on that, you are currently ${weightMessage} ${idealWeight} kg, and you burn ${caloriesBurnedDaily} calories daily.`
        
            const dietMessage = idealWeight == weightInKg 
                ? "No reason to go on diet. You are currently having perfect weigth!" 
                : `If you want to reach your ideal weight of ${idealWeight} kg, you need to consume ${dietCalories} calories for next ${weeksToGoal} weeks.`
        
        
            diet.innerHTML = "<p>DIET:</p>" + dietMessage;       
        }

    
    

    console.log(`
    ${exerciseFactor}
    BMI CALCULATOR:
    ---------------

    Age: ${age} years
    height: ${heightInM} m
    weight: ${weightInKg} kg

    FACING THE FACTS:
    -----------------

    Your BMI is ${bmi}

    A BMI unnder 18.5 is cosidered underweight.
    BMI above 25 is considered overweight.

    Your ideal weigth is ${idealWeight}
    With a normal lifestyle you burn ${caloriesBurnedDaily} calories a day

    DIET PLAN:
    ----------

    If you want to reach your ideal weight of ${idealWeight} kg:

    Eat ${dietCalories} calories a day
    For ${weeksToGoal} weeks
    `);
})


