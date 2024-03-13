
import React from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState('');

  const inputChange = (event) => {
    setText(`Hello ${event.target.value}`);
  }

  return (
    <div>
        {/* Do not remove the main div */}
      <label>Enter your name:</label> <br></br>
      <input onChange={inputChange} type='text'></input>
      {text && 
        <p>{text}!</p>
      }
    </div>
  )
}

export default App
