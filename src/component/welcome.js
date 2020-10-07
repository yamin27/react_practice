import React, {Component} from "react";

class Welcome extends Component{

    doThisFromClass(){
        alert('Button is click form class')
    }

    render() {

        return <div>
                    <button onClick={this.doThisFromClass}>Click me from class</button>
                    <h1> I am from {this.props.name}</h1>
               </div>


    }

}

export default Welcome;