import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";




const handleSubmit =(event)=>{
    event.preventDefault();
    const Usuario =window.localStorage.getItem('username')
    var min = 1;
    var max = 10000;
    var x = Math.floor(Math.random()*(max-min+1)+min);
    const fechaActual = new Date()
    const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const Fecha =fechaActual.toLocaleDateString('es-us', opciones)

console.log(x)
    const data =new FormData(event.target);
    const DataCreate =
    {
     largo: data.get("largo"),
     ancho: data.get("ancho"),
     alto: data.get("alto"),
     peso: data.get("peso"),
     direccionRecogida: data.get("direccionRecogida"),
     destinatario: data.get("Destinatario"),
     cedulaDestinatario: data.get("CedulaDestinatario"),
     direccionEntrega: data.get("DireccionEntrega"),
     ciudadEntrega: data.get("CiudadEntrega"),
     ciudadRecogida: data.get("ciudadRecogida"),
     usuario: Usuario,
     numeroOrden: x,
     fecha:Fecha

    }
    console.log('respuesta de ENVIO DE DATOS', DataCreate)
    console.log('respuesta de orden', x)

        alert("Orden Creada con exito Numero Orden",x)

         const requestOptions = {method: 'POST', headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Q0MjZiZDUxYTRhYTM4NTk4MDhlZCIsInVzdWFyaW8iOiJqbGd1ZWxsQHVuaW5vcnRlLmVkdS5jbyIsImlhdCI6MTY2OTY5Mjk1OX0.zDSsBpKbaKHVCqjJ_1UAG43kXKYkxjt21cXzyGiKYr4','Content-Type': 'application/json'},      
                   body: JSON.stringify(DataCreate) };    
                   fetch('http://localhost:5000/ordenes/', requestOptions)   // ruta del back
                   .then(response => response.json())        
                   .then(data => { console.log('respuesta de consulta', data); 
                });
   }





const FormularioCrearOrden=(props) => {

  const [pedido, setPedido] = useState([])

  const { id } = useParams()

  useEffect( ( ) => {console.log("estoy imprimiendo,", pedido)



setPedido(props.data)
console.log(pedido.largo)






})



  

   
 

 
   
    

      return(
    
<>
{    
 
        <form name='FormsCrear' onSubmit={handleSubmit} className="row g-3">
 
  
        <div className="mb-3 row">
            <label for="largo" className="col-sm-2 col-form-label">Largo</label>
            <input className="col-sm-2" type="text"  name="largo" id="largo" />
            <label for="ancho" className="col-sm-2 col-form-label">Ancho</label> 
            <input className="col-sm-2" type="text"  name="ancho" id="ancho" />
            <label for="alto" className="col-sm-2 col-form-label">Alto</label>
            <input className="col-sm-2" type="text" name="alto" id="alto" />
        </div>
        <div className="mb-3 row">
            <label for="peso" className="col-sm-2 col-form-label">Peso</label>
            <input className="col-sm-2" type="text"  name="peso" id="peso" />
        </div>

        <div className="col-md-6">
            <label for="direccion" className="form-label">Dirección de recogida</label>
            <input type="text" className="form-control" name="direccionRecogida" id="direccionRecogida" placeholder="Ingrese la dirección" />
          </div>
        <div className="col-md-6">
          <label for="ciudad" className="form-label">Ciudad de recogida</label>
          <input type="text" className="form-control" name="ciudadRecogida" id="ciudad" placeholder="Ingrese la ciudad" />
        </div>
        <div className="col-md-6">
          <label for="destinatario" className="form-label">Nombre destinatario</label>
          <input type="text" className="form-control" name="Destinatario" id="destinatario" placeholder="Nombre Destinatario" />
        </div>
        <div className="col-md-6">
          <label for="cedulaDestinatario" className="form-label">Cedula destinatario</label>
          <input type="text" className="form-control" name="CedulaDestinatario" id= "cedulaDestinatario" placeholder="Cedula Destinatario" />
        </div>
        <div className="col-md-6">
            <label for="DirEntrega" className="form-label">Dirección de entrega</label>
            <input type="text" className="form-control" name="DireccionEntrega" id="DirEntrega" placeholder="Ciudad Entrega" />
        </div>
        <div className="col-md-6">
            <label for="ciudadEntrega" className="form-label">Ciudad de entrega</label>
            <input type="text" className="form-control" name="CiudadEntrega" id="ciudadEntrega" placeholder="Ciudad Entrega" />
        
        </div><br/><br/>

        <div className="col-12">
          <input type="submit" value="Crear órden" name="btncrearOrden" className="btn btn-primary"/>

        </div>
        
      </form>
      }
    </>
 
  
     
    )
    
    
}
export default FormularioCrearOrden