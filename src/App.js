import React from 'react';
import './App.css';

function App({ domElement }) {

  const attr = domElement.getAttribute("id");
  
  return (
    <div className="App">         
        <h1 style={{textAlign: 'center'}}>
          My First widget width id = {attr}
        </h1>     
    </div>
  );
}

export default App;
