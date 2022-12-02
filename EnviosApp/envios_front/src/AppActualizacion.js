import { Link, useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import FormularioOrden from "./Components/FormularioOrden";

function App4() {
  const[ordenesApi,setordenesApi]=React.useState([]);
  const {id} = useParams()


  //   React.useEffect(() => {
//   console.log("estoy imprimiendo,", infoOrder)
//  fetch('http://localhost:3004/ordenes')
// .then(response => response.json())
// .then (data => setordenesApi(data));

//   },[]);


useEffect(() => {    // POST request using fetch inside useEffect React hook    
  const requestOptions = {  method: 'GET', headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Q0MjZiZDUxYTRhYTM4NTk4MDhlZCIsInVzdWFyaW8iOiJqbGd1ZWxsQHVuaW5vcnRlLmVkdS5jbyIsImlhdCI6MTY2OTY5Mjk1OX0.zDSsBpKbaKHVCqjJ_1UAG43kXKYkxjt21cXzyGiKYr4' },      
        };
        console.log('estoy imprimiendo id: ',id)       
    fetch('http://localhost:5000/ordenes/'+id, requestOptions)   // ruta del back
    .then(response => response.json())        
    .then(data => { console.log('los datos recibidos fueron', data); setordenesApi(data) });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  

  return (
    <div className="container w-75 bg-primary mt-1 rounded shadow">
        <div className="row align-items-stretch">
            {/* <!--<div className="col bge d-none d-lg-block col-md-5 col-lg-5 col-xl-6"> ---

            </div> --> */}
            <div className="col bg-white p-2 rounded-end">  {/* <!--FORMULARIO  --> */}
                <div className="text-end">
                    <img src="imagenes/24-horas.gif" width="65" alt=""/>
                </div>

                <h2 className="py-4">Gestión de paquetes - Actualización de órdenes (Recogida)</h2>
                <br/>
                {/* <!-- LOGIN  --> */}



             <div className="fw-bold text-center py-1">
             <FormularioOrden data={ordenesApi}/>
                  <Link to="/Menu" className="col-md-6">
                      <input type="button" value="Regresar" name="btncrearOrden" className="btn btn-primary" style={{float:"right"}}/>
                     </Link>           

            </div>  
          </div>
        </div>
    </div>
  

  );
}

export default App4;
