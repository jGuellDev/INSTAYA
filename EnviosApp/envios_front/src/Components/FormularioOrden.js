import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const FormularioOrden=(props) => {

  const [pedido, setPedido] = useState([])

  const { id } = useParams()

  useEffect( ( ) => {console.log("estoy imprimiendo,", pedido)



setPedido(props.data)
console.log(pedido.largo)


})


// const FormularioOrden=(props) => {

//   const{data}=props;
//   console.log("estoy imprimiendo largo,",data)
  

   
 

 
   
    

      return(
    
<>
{    
 
        <form action="/procesar/usuario" method="post" className="row g-3">
 
  
        <div className="mb-3 row">
            <label for="largo" className="col-sm-2 col-form-label">Largo</label>
            <input className="col-sm-2" type="text"  name="txtcorreo" id="largo" value={pedido.largo}/>
            <label for="ancho" className="col-sm-2 col-form-label">Ancho</label> 
            <input className="col-sm-2" type="text"  name="txtcorreo" id="ancho" value={pedido.ancho}/>
            <label for="alto" className="col-sm-2 col-form-label">Alto</label>
            <input className="col-sm-2" type="text" name="txtcorreo" id="alto" value={pedido.alto}/>
        </div>
        <div className="mb-3 row">
            <label for="peso" className="col-sm-2 col-form-label">Peso</label>
            <input className="col-sm-2" type="text"  name="txtcorreo" id="peso" value={pedido.peso}/>
        </div>

        <div className="col-md-6">
            <label for="direccion" className="form-label">Dirección de recogida</label>
            <input type="text" className="form-control" name="textDireccion" id="direccion" placeholder="Ingrese la dirección" value={pedido.direccionRecogida}/>
          </div>
        <div className="col-md-6">
          <label for="ciudad" className="form-label">Ciudad de recogida</label>
          <input type="text" className="form-control" name="textCiudad" id="ciudad" placeholder="Ingrese la ciudad" value={pedido.ciudadRecogida}/>
        </div>
        <div className="col-md-6">
          <label for="destinatario" className="form-label">Nombre destinatario</label>
          <input type="text" className="form-control" name="textnombreDestinatario" id="destinatario" placeholder="Nombre Destinatario" value={pedido.destinatario}/>
        </div>
        <div className="col-md-6">
          <label for="cedulaDestinatario" className="form-label">Cedula destinatario</label>
          <input type="text" className="form-control" name="textCedulaDestinatario" id= "cedulaDestinatario" placeholder="Cedula Destinatario" value={pedido.cedulaDestinatario}/>
        </div>
        <div className="col-md-6">
            <label for="DirEntrega" className="form-label">Dirección de entrega</label>
            <input type="text" className="form-control" name="textDirEntrega" id="DirEntrega" placeholder="Ciudad Entrega" value={pedido.direccionEntrega}/>
        </div>
        <div className="col-md-6">
            <label for="ciudadEntrega" className="form-label">Ciudad de entrega</label>
            <input type="text" className="form-control" name="textCiudadEntrega" id="ciudadEntrega" placeholder="Ciudad Entrega" value={pedido.ciudadEntrega}/>
        
        </div><br/><br/>

        <div className="col-12">
          <input type="submit" value="órden" name="btncrearOrden" className="btn btn-primary"/>

        </div>
        
      </form>
      }
    </>
 
  
     
    )
    
    
}
export default FormularioOrden