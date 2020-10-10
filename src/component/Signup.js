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

        if (inputName === "fname"){


            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)){

                this.setState({fname: "First Name is not valid"})
            }

        }

        if (inputName === "lname"){


            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)){

                this.setState({lname: "Last Name is not valid"})
            }

        }

        if (inputName === "email"){

            var emailPattern= /\S+@\S+\.\S+/;

            if (!emailPattern.test(inputValue)){

                this.setState({email: "Email is not valid"})
            }

        }

        if (inputName === "mobile"){

            if (!Number(inputValue)){

                this.setState({mobile: "Mobile No is not valid"})
            }

        }

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