import './App.css';
import React, { useState, useRef } from 'react'
import BmiText from './BmiText'

function App() {

  const weight = useRef(null)

  const height = useRef(null)

  const [bmi, setBMI] = useState(0)


  function OnResultBMI() {

    // w / h * 100 * 2


    let weight_ = weight.current.value
    let height_ = height.current.value

    let result = weight_ / Math.pow(height_ / 100, 2)

    setBMI(result)

  }

  return (

    <div>

      <div>

        <p>Enter your weight: </p><br />

        <input type="text" name="" ref={weight} />

        <p>Enter your height: </p><br />

        <input type="text" name="" ref={height} /><br />

        <button type="button" onClick={OnResultBMI}>Calculate</button>

      </div>

      <div>

        <h3>Your BMI: {bmi.toFixed(2)} </h3>

      </div>

      <BmiText
      bmi = {bmi}/>
    </div>
  )

}

export default App;
