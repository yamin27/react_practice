import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/hello";
import Welcome from "./component/welcome";

function App() {
  return (
    <div className="App">

        <Hello name="Yamin" age="28"></Hello>

        <Welcome name="class 1"></Welcome>

    </div>
  );
}

export default App;
