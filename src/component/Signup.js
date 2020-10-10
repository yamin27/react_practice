import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Signup extends Component {

    constructor() {
        super();

        this.state= {

            fname: " ",
            lname: " ",
            email: " ",
            mobile: " ",

        }
    }


    onChangeHandler=(event)=> {

        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({ [inputName]: inputValue})

    }



    render() {
        return (
            <div>

                <p> First Name: {this.state.fname}</p>
                <p> First Name: {this.state.lname}</p>
                <p> First Name: {this.state.email}</p>
                <p> First Name: {this.state.mobile}</p>

                <form>

                    <input onChange={this.onChangeHandler} type="text"  name="fname" placeholder="Your First Name"></input><br/>
                    <input onChange={this.onChangeHandler} type="text"  name="lname" placeholder="Your Last Name"></input><br/>
                    <input onChange={this.onChangeHandler} type="text"  name="email" placeholder="Your Email"></input><br/>
                    <input onChange={this.onChangeHandler} type="text"  name="mobile" placeholder="Your Mobile NO"></input><br/>
                    <input onChange={this.onChangeHandler} type="submit" value="SIGN UP "></input>

                </form>

            </div>
        );
    }
}

export default Signup;