import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/hello";
import Welcome from "./component/welcome";
import Arrow from "./component/Arrow";
import State from "./component/state";
import Condition from "./component/Condition";

function App() {
  return (
    <div className="App">

        {/*<Hello name="Yamin" age="28"></Hello>*/}


        {/*<Welcome name="class 1"></Welcome>*/}

        {/*<Arrow/>*/}

        <State></State>
        <Condition></Condition>

    </div>
  );
}

export default App;
