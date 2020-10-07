import React, {Component} from "react";

class State extends Component {


    constructor() {
        super()

        this.state= {

            name:"Sarker",
            age: '28',
        }
    }

    render() {

        return <div>

            <h1>Name: {this.state.name} </h1>
            <h1>age: {this.state.age}</h1>

        </div>


    }
}

export default State;



