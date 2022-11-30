import './App.css';
import { Link} from "react-router-dom";
import Tabla from './Components/Tabla';
import { Dataordenes } from './utils/dataOrdenes';
import React, { useState } from 'react';

function App5() {
  // const[usuario,setUsuario]=useState(Dataordenes)
  const[ordenesApi,setordenesApi]=React.useState([]);
  React.useEffect(() => {
fetch('http://localhost:3004/ordenes')
.then(response => response.json())
.then (data => setordenesApi(data));

  },[]);

  return (
    <div>
        <div class="sidebar">
        <div class="logo-details">
            <img src="#" width="65" alt=""/>
            <div class="logo_name">Menu</div>
            <i class='bx bx-menu' id="btn" ></i>
        </div>
        <ul class="nav-list">
          <li>
              <i class='bx bx-search' ></i>
             <input type="text" placeholder="Search..."/>
             <span class="tooltip">Search</span>
          </li>

          <Link to="/">
          <li>

              <i class='bx bx-home-alt'></i>
             <span class="tooltip">Salir</span>
          </li>
          </Link>

          <Link to="/RegisterOrdenes">

          <li>
             <i class='bx bx-package' ></i>
           <span class="tooltip">Registro Ordenes</span>
         </li>
         </Link>

         <Link to="/Actualizacion">
         <li>
             <i class='bx bxs-backpack' ></i>
           <span class="tooltip">Actualiza Ordenes</span>
         </li>
         </Link>   
        </ul>
      </div>
    
{/* <section class="home-section"/> */}
    <div class="container-fluid container fixed-top">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
      <Link to="/Menu"class="navbar-brand ms-5">

       Plataforma Recogida de Paquetes
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-6 mb-2 mb-lg-0">
            <li class="nav-item"/>
            <img src="imagenes/24-horas.gif" width="65" alt=""/>

          </ul>
        </div>

      </div>
    </nav>
  </div>
  
  <div>
      <div class="container-fluid fondo">

        {/*Aca Empieza la tabla"/> */}
<Tabla data={ordenesApi}/>


      {/* <aca Termina"/> */}
      </div>

    </div>

        

  </div>



      );
}

      export default App5;
