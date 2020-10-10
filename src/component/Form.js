import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state= {
            name: " "
        }
    }

    onChangeHandler=(event)=>{

        var newName = event.target.value;
        this.setState({name:newName})

    }

    render() {
        return (
            <div>
                <form>
                    <p>My First Form By ReactJs </p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;