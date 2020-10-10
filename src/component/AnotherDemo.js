import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AnotherDemo extends Component {

    changeImg(){

        var imgID = document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src="http://demo.yaminalam.com/images/banner/Illustration.png"


    }

    render() {
        return (
            <div>
                <button onClick={this.changeImg}>Change Image</button><br></br>
                <img id="imgID" src='http://yaminalam.com/images/bg/about.jpg'></img>

            </div>
        );
    }
}

export default AnotherDemo;