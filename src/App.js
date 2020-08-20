import React from 'react';
import './Css/style.css';
import Front from './Components/Front';
import Mainchat from './Components/Mainchat';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Front />
        <Mainchat />
      </div>
    </div>
  );
}

export default App;
