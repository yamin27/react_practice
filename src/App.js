import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/hello";
import Welcome from "./component/welcome";

function App() {
  return (
    <div className="App">

        <Hello name="Yamin" age="28"></Hello>
        <Hello name="Kalam" age="30"></Hello>
        <Hello name="Akter" age="29"></Hello>

        <Welcome></Welcome>

    </div>
  );
}

export default App;
