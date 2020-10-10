import React, {Component} from 'react';
import ReactDom from 'react-dom'

class NewDemo extends Component {



    changeDom(){

        var container = document.getElementById('myID');
        var element = <h1>my fullname is yamin alam sarker"</h1>
        var callback = function (){
            alert('i am from call back')
        }

        ReactDom.hydrate(element, container, callback);

    }

    render() {
        return (
            <div>
                <button onClick={this.changeDom}>Change</button>
                <h1 id="myID">My Name is Yamin</h1>
            </div>
        );
    }
}

export default NewDemo;