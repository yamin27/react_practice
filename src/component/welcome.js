import React, {Component} from "react";

class Welcome extends Component{

    doThisFromClass(a){
        alert(a)
    }

    render() {

        return <div>
                    <button onClick={this.doThisFromClass.bind(this, "I am from perameter")}>Click me from class</button>
                    <h1> I am from {this.props.name}</h1>
               </div>


    }

}

export default Welcome;