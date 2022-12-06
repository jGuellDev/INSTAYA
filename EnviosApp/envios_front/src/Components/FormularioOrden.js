import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


const handleSubmit =(event)=>{
  
  event.preventDefault();
  const data =new FormData(event.target);
  const numeroOrden =data.get("orden")
  const DataCreate =
  {
   largo: data.get("largo"),
   ancho: data.get("ancho"),
   alto: data.get("alto"),
   peso: data.get("peso"),
   direccionRecogida: data.get("direccionRecogida"),
   destinatario: data.get("destinatario"),
   cedulaDestinatario: data.get("cedulaDestinatario"),
   direccionEntrega: data.get("direccionEntrega"),
   ciudadEntrega: data.get("ciudadEntrega"),
   ciudadRecogida: data.get("ciudadRecogida"),
   numeroOrden: data.get("orden"),
 
  }
  console.log('respuesta de ENVIO DE DATOS', DataCreate)
      alert("Orden actualizada con exito con exito")

       const requestOptions = {method: 'PUT', headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Q0MjZiZDUxYTRhYTM4NTk4MDhlZCIsInVzdWFyaW8iOiJqbGd1ZWxsQHVuaW5vcnRlLmVkdS5jbyIsImlhdCI6MTY2OTY5Mjk1OX0.zDSsBpKbaKHVCqjJ_1UAG43kXKYkxjt21cXzyGiKYr4','Content-Type': 'application/json'},      
                 body: JSON.stringify(DataCreate) };
                 console.log('numero de orden',numeroOrden)    
                 fetch('http://localhost:5000/ordenes/'+numeroOrden, requestOptions)   // ruta del back
                 .then(response => response.json())        
                 .then(data => { console.log('respuesta de consulta', data); 
              });
 }



const FormularioOrden=(props) => {

  const [pedido, setPedido] = useState([])

  const { id } = useParams()

  useEffect( ( ) => {console.log("estoy imprimiendo id,", id)



setPedido(props.data)
console.log(pedido.largo)


})


// const FormularioOrden=(props) => {

//   const{data}=props;
//   console.log("estoy imprimiendo largo,",data)
  

   
 

 
   
    

      return(
    
<>
{    
 
        <form name='FormsActualizar' onSubmit={handleSubmit} className="row g-3">
 
  
        <div className="mb-3 row">
        <label for="largo" className="col-sm-2 col-form-label">Orden</label>
            <input className="col-sm-2" type="text"  name="orden" id="largo" value={id}/>

            <label for="largo" className="col-sm-2 col-form-label">Largo</label>
            <input className="col-sm-2" type="text"  name="largo" id="largo" value={pedido.largo}/>
            <label for="ancho" className="col-sm-2 col-form-label">Ancho</label> 
            <input className="col-sm-2" type="text"  name="ancho" id="ancho" value={pedido.ancho}/>
            <label for="alto" className="col-sm-2 col-form-label">Alto</label>
            <input className="col-sm-2" type="text" name="alto" id="alto" value={pedido.alto}/>
        </div>
        <div className="mb-3 row">
            <label for="peso" className="col-sm-2 col-form-label">Peso</label>
            <input className="col-sm-2" type="text"  name="peso" id="peso" value={pedido.peso}/>
        </div>

        <div className="col-md-6">
            <label for="direccion" className="form-label">Dirección de recogida</label>
            <input type="text" className="form-control" name="direccionRecogida" id="direccionRecogida" placeholder="Ingrese la dirección" />
          </div>
        <div className="col-md-6">
          <label for="ciudad" className="form-label">Ciudad de recogida</label>
          <input type="text" className="form-control" name="ciudadRecogida" id="ciudadRecog" placeholder="Ingrese la ciudad" value={pedido.ciudadRecogida}/>
        </div>
        <div className="col-md-6">
          <label for="destinatario" className="form-label">Nombre destinatario</label>
          <input type="text" className="form-control" name="destinatario" id="destinatario" placeholder="Nombre Destinatario" value={pedido.destinatario}/>
        </div>
        <div className="col-md-6">
          <label for="cedulaDestinatario" className="form-label">Cedula destinatario</label>
          <input type="text" className="form-control" name="cedulaDestinatario" id= "cedulaDestinatario" placeholder="Cedula Destinatario" value={pedido.cedulaDestinatario}/>
        </div>
        <div className="col-md-6">
            <label for="DirEntrega" className="form-label">Dirección de entrega</label>
            <input type="text" className="form-control" name="direccionEntrega" id="DirEntrega" placeholder="Ciudad Entrega" value={pedido.direccionEntrega}/>
        </div>
        <div className="col-md-6">
            <label for="ciudadEntrega" className="form-label">Ciudad de entrega</label>
            <input type="text" className="form-control" name="ciudadEntrega" id="ciudadEntrega" placeholder="Ciudad Entrega" value={pedido.ciudadEntrega}/>
        
        </div><br/><br/>

        <div className="col-12">
          <input type="submit" value="Actualizar órden" name="btncrearOrden" className="btn btn-primary"/>

        </div>
        
      </form>
      }
    </>
 
  
     
    )
    
    
}
export default FormularioOrden