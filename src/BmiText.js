import React from 'react'

export default function BmiText({bmi}) {
    if(bmi < 18.5){
        return(
            <div>
                <p>Under weight</p>
            </div>
        )
    }
    else if(bmi > 18 && bmi < 30){
        return(
            <div>
                <p>Normal</p>
            </div>
        )
    }
    else if(bmi > 30){
        return(
            <div>
                <p>Over weight</p>
            </div>
        )
    }
    
}
