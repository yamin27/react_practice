import React, {Component} from 'react';

class Text extends Component {

    constructor(props) {
        super(props);

        this.state= {

            desc: "Insert Some Text",

            userInput: "",

        }
    }

    onChangeHandler=(event)=> {

        var userText = event.target.value;

        this.setState({userInput: userText})

    }


    render() {
        return (
            <div>

                <textarea onChange={this.onChangeHandler} placeholder="Your massage here"></textarea>

                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;