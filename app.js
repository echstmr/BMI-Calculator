document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById("weight");
    const weightUnit = document.getElementById("weight-unit");
    const heightFtInput = document.getElementById("height-ft");
    const heightInInput = document.getElementById("height-in");
    const submit = document.getElementById("submit");
    const displayResult = document.getElementById("result");

    const calcBmi = () => {
        let weight = parseFloat(weightInput.value);
        let heightFt = parseFloat(heightFtInput.value);
        let heightIn = parseFloat(heightInInput.value);

        if (
            isNaN(weight) || weight <= 0 ||
            isNaN(heightFt) || heightFt < 0 ||
            isNaN(heightIn) || heightIn < 0
        ) {
            displayResult.style.color = 'red';
            
            displayResult.textContent = "Please enter valid weight and height values.";
            setTimeout(() => {
            displayResult.textContent = "";
            }, 5000);
            return;
        }

        if (weightUnit.value === "lbs") {
            weight *= 0.453592; 
        }

        let heightInches = (heightFt * 12) + heightIn;

        let heightMeters = heightInches * 0.0254;

        let bmi = weight / (heightMeters * heightMeters);

        
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
            displayResult.style.color = '#fff';
            displayResult.style.backgroundColor = 'red';
        displayResult.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
        } else if (bmi < 24.9) {
            category = "Normal weight";
            displayResult.style.color = '#fff';
            displayResult.style.backgroundColor = 'green';
            displayResult.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
        } else if (bmi < 29.9) {
            category = "Overweight";
            displayResult.style.color = '#000';
            displayResult.style.backgroundColor = 'yellow';
            displayResult.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
        } else {
            category = "Obese";
            displayResult.style.color = '#000';
            displayResult.style.backgroundColor = 'orange';
            displayResult.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
          
        }


        setTimeout(() => {
            displayResult.textContent = ``;
        }, 10000);

        
        
    };
        submit.addEventListener("click", () =>{
            calcBmi();
        });
});


