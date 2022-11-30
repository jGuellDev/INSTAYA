import React from 'react'
import { Link} from "react-router-dom";

const Tabla = (props) => {
    const{data}=props;
    console.log("estoy imprimiendo data,",data)
  return (
    <div class="container d-flex flex-column justify-content-center h-100 text-white align-items-center">
      <div class="container">
        <div class="row">
          <div class="col">
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <th>#Servicio</th>
                  <th>Fecha</th>
                  <th>Ciudad Entrega</th>
                  <th>Direccion Entrega</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dato)=>{
                    return(
                <tr>
                    <Link to="/Actualizacion">
                    <td>{dato.servicio}</td>
                     </Link>                  
                  <td>{dato.fecha}</td>
                  <td>{dato.ciudadEntrega}</td>
                  <td>{dato.DirEntrega}</td>
                  <td>{dato.estado}</td>
                </tr>
                )})}


              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>


  )
}

export default Tabla