import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppLogin';
import App2 from './AppRegistro';
import App3 from './AppCrearOrden';
import App4 from './AppActualizacion';
import App5 from './AppMenu';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>
<Routes>
<Route exact path="/" element={<App/>} />
<Route path="/Registro" element={<App2/>} />
<Route path="/RegisterOrdenes" element={<App3/>} />
<Route path="/Actualizacion" element={<App4/>} />
<Route path="/Menu" element={<App5/>} />

</Routes>
</Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
