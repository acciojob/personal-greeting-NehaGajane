
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <label>Enter your name:</label> <br></br>
      <input onChange={inputChange} type='text'></input>
      <p>{text}</p>
    </div>
  )
}

export default App
