import React, { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const pstyle = {
    marginTop: "25px",
    textAlign: "left",
    fontWeight:"bold",
  };
 
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setcategory] = useState("");
  const [calculated, setCalculated] = useState(false);

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
    setCalculated(false);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    setCalculated(false);
  };

  const calculateBMI = (event) => {
    event.preventDefault();
    const heightInMeters = height / 100; 
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
    
    if (bmiValue < 18.5) {
      setcategory("Underweight");
    } else if (bmiValue > 18.5 && bmiValue < 24.9) {
      setcategory("Normal");
    } else if (bmiValue > 25 && bmiValue < 29.9) {
      setcategory("Overweight");
    } else if (bmiValue > 30) {
      setcategory("Obese");
    }
    setCalculated(true);
  };
  return (
    <>
      <div className="main">
        <div className="form">
          <form onSubmit={calculateBMI}>
            <div class="mb-3">
              <label htmlFor="height" class="form-label">
               <b> Enter your height (in cm) :</b>
              </label>
              <br />
              <input
                type="number"
                id="height"
                step="0.01"
                value={height}
                onChange={handleHeightChange}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="weight" class="form-label">
                <b>Enter your weight (in kg) :</b>
              </label>
              <br />
              <input
                type="number"
                id="weight"
                step="0.01"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Calculate BMI
            </button>
            <p style={pstyle}>
              Result :<br/>
              Your BMI is : {bmi} kg/m<sup>2</sup><br/>
              You are : {category}
            </p>
          </form>
        </div>
        <div className="image">
          <img src="bmi.png" alt="bmi" />
        </div>
      </div>
    </>
  );
}
