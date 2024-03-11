import React from 'react'

function EyesOnMe() {
    // function handleFocus() {
    //     console.log('Good!')
    // }

    // function handleBlur() {
    //     console.log('Hey! Eyes on me!')
    // }
    
    return (
        <div>
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe