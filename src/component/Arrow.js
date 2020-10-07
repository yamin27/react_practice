import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// function Arrow(){
//
//     return(
//
//         <button>My Button</button>
//
//     );
// }

const AlertMe=(a)=> {
    alert(a)
}

const Arrow=()=> {

    return (

        <button onClick={AlertMe.bind(this, "Alert from arrow function")} className="btn btn-danger">MY Button from Arrow Function</button>
    );
}

export default Arrow;