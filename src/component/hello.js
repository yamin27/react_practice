import React from "react";

function Hello(props){

    function Dothis(){
        alert('Button is clicked')
    }

    return (

        <div>

            <button onClick={Dothis}>Click Me</button>
            <h1>Name: {props.name}, Age: {props.age}</h1>
        </div>


    );
}

export default Hello;