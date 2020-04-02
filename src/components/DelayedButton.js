// Code DelayedButton Component Here
import React from 'react';

 const DelayedButton = (props) => {

    const handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            props.onDelayedClick(event);
          }, props.delay)
    }

    return (
    <h1>
        <button type="button" onClick = {handleClick}>Click Me!</button>
    </h1>
    )
 }

 export default DelayedButton