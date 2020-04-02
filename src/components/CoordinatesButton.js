// Code CoordinatesButton Component Here
import React from 'react';

 const CoordinatesButton = (props) => {

    const handleClick = (event) => {
        props.onReceiveCoordinates([event.pageX, event.pageY])
    }

    return (
    <h1>
        <button type="button" onClick = {handleClick}>Click Me!</button>
    </h1>
    )
 }

 export default CoordinatesButton