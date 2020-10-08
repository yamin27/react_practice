import React, {Component} from "react";

class Condition extends Component{

    constructor() {
        super();

        this.state= {

            login:true
        }

    }

    render() {

       return (
           this.state.login ? <h1>Condituion true</h1> : <h1>Condition False</h1>
       )
    }
}

export default Condition;