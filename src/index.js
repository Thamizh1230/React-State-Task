import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainstate from './Mainstate';
import Main from './Main';
import Parentclass from './Parentclass';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* <Mainstate /> */
/* <Main /> */
<Parentclass />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
