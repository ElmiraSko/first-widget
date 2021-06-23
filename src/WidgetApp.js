import React from 'react';
import './WidStyle.css';

function WidgetApp({ domElement }) {

  const attr = domElement.getAttribute("id");
  
  return (
    <div className="Widget_app">         
        <h1 style={{textAlign: 'center'}}>
          My First widget width id = {attr}
        </h1>     
    </div>
  );
}

export default WidgetApp;
