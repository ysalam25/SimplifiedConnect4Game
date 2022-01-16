import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Play,Stop} from './Screens';

function App() {
  return (
    <>
    <div>
      <header>Connect 4</header>
    </div>
    <div className="container">
        <div className="game">
          <div>
            <button id='playButton' onClick={()=> {ReactDOM.render(<Play />, document.getElementById('screen'))}}> Play </button>
            <button id='resetButton' onClick={()=> {ReactDOM.render(<Stop />, document.getElementById('screen'))}}> Stop </button>
          </div>
        </div>
    </div>

    </>
  );
}

export default App;
