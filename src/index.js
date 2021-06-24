import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import WidgetApp from './WidgetApp';
import FormForNick from './FormForNick';

const Widget = document.getElementById('first-widget');

ReactDOM.render(
  <React.StrictMode>
    <FormForNick domElement={Widget}/>
  </React.StrictMode>,
  Widget
);


//=============================================
// window.ReactForm = {
//   mount: () => {
//     const Widget = document.getElementById('first-widget');
//     ReactDOM.render(
//         <React.StrictMode>
//           <WidgetApp domElement={Widget}/>
//         </React.StrictMode>,
//         Widget
//       );
//   },
//   unmount: () => {
//     const Widget = document.getElementById('first-widget');
//     ReactDOM.unmountComponentAtNode(Widget);
//   }
// };

// window.ReactForm.mount();
