import React, {Component} from "react";

class State extends Component {


    constructor() {
        super()


        this.state= {

            name:"Sarker",
            age: ["12", '13', '14', '15'],
            weight: {

                class7: ['45', '50'],
                class10: '70',
                class12: '75'
            }
        }
    }

    changeName(a){

        this.setState({name:a})

    }

    render() {

        return <div>

            <h1>Name: {this.state.name} </h1>
            <h1>age: {this.state.age[2]}</h1>
            <h1>age: {this.state.weight.class7[1]}</h1>

            <button onClick={this.changeName.bind(this, 'Kalam')}> Change Name </button>

        </div>


    }
}

export default State;



