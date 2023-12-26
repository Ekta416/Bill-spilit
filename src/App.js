//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Tip from './Tip';
import {Link,Route, Routes} from "react-router-dom"
import Tip from './Tip';

function App() {
  const[much,setMuch]=useState()
  const[many,setMany]=useState()
  const[result,setResult]=useState()

  const handleSplit=()=>{
    let m=parseInt(much)
    let n=parseInt(many)
    if (!isNaN(m) && !isNaN(n) && n !== 0) {
      var result = m / n;
      setResult(result.toFixed(2)); // Display result with two decimal places
    } else {
      setResult('Invalid input. Please enter valid numbers.');
    }
  }
  const handleReset=()=>{
    setResult(null);
    setMany('');
    setMuch('');
  }

  return (
    <>
    <center>
    <h1>
      Bill Splitter
    </h1>
    <div className="App">
     <h4> How Much?</h4>
      <input type="text" placeholder='Add the total'
      onChange={(e)=>{
        setMuch(e.target.value)
      }}
      ></input>
      <hr></hr>
      <h4>How Many</h4>
      <input type="text" placeholder='Add the number'
      onChange={(e)=>{
        setMany(e.target.value)
      }}
      ></input>
      <hr></hr>
      
      <h4>Feelin's generous?  <Link to="/tip">Add tip</Link> </h4>
      <span>
      <button type="submit" onClick={handleSplit}>Split</button>
      <button type="reset" onClick={handleReset}>Reset</button>
      </span>
      <h1>{result}</h1>
    </div>
    </center>
    <center>
    <Routes>
          <Route path="/tip" element={<Tip v={result}></Tip>}></Route>
         </Routes>
         </center>
    </>
  );
}

export default App;
