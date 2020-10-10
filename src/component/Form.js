import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state= {
            username: " "
        }
    }

    onChangeHandler=(event)=>{
        //
        // var newName = event.target.value;
        // this.setState({name:newName})

        var myname= event.target.name;
        var myvalue = event.target.value;

       this.setState({[myname]:myvalue})

    }

    onSubmitHandler=()=>{

        alert(this.state.username)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My First Form By ReactJs </p>
                    <p>{this.state.username}</p>
                    <input onChange={this.onChangeHandler} name="username" type="text" placeholder="Your Name"></input>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;