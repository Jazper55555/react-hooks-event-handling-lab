import React from 'react'

function Keypad (){
    function handleInputText(event) {
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input onChange={handleInputText} 
            placeholder='Password'
            type='password'/>
        </div>
    )
}

export default Keypad;

// Create input element
// Add onChange to input element (function?)
// Console.log the input value from input element