import React from "react";

function Hello(props){

    function Dothis(a){
        alert(a)
    }

    return (

        <div>

            <button onClick={Dothis.bind(this, "i am from parameter")}>Click Me</button>
            <h1>Name: {props.name}, Age: {props.age}</h1>
        </div>


    );
}

export default Hello;