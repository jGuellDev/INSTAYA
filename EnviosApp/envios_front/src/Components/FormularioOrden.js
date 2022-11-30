import React from 'react'
const FormularioOrden=(props) => {

  const{data}=props;
  console.log("estoy imprimiendo largo,",data)
  

      
 

 
   
    

      return(
    

    
 
        <form action="/procesar/usuario" method="post" className="row g-3">
 
  
        <div className="mb-3 row">
            <label for="largo" className="col-sm-2 col-form-label">Largo</label>
            <input className="col-sm-2" type="text"  name="txtcorreo" id="largo" value="prueba"/>
            <label for="ancho" className="col-sm-2 col-form-label">Ancho</label>
            <input className="col-sm-2" type="text"  name="txtcorreo" id="ancho"/>
            <label for="alto" className="col-sm-2 col-form-label">Alto</label>
            <input className="col-sm-2" type="text" name="txtcorreo" id="alto"/>
        </div>
        <div className="mb-3 row">
            <label for="peso" className="col-sm-2 col-form-label">Peso</label>
            <input className="col-sm-2" type="text"  name="txtcorreo" id="peso"/>
        </div>

        <div className="col-md-6">
            <label for="direccion" className="form-label">Dirección de recogida</label>
            <input type="text" className="form-control" name="textDireccion" id="direccion" placeholder="Ingrese la dirección"/>
          </div>
        <div className="col-md-6">
          <label for="ciudad" className="form-label">Ciudad de recogida</label>
          <input type="text" className="form-control" name="textCiudad" id="ciudad" placeholder="Ingrese la ciudad"/>
        </div>
        <div className="col-md-6">
          <label for="destinatario" className="form-label">Nombre destinatario</label>
          <input type="text" className="form-control" name="textnombreDestinatario" id="destinatario" placeholder="Nombre Destinatario"/>
        </div>
        <div className="col-md-6">
          <label for="cedulaDestinatario" className="form-label">Cedula destinatario</label>
          <input type="text" className="form-control" name="textCedulaDestinatario" id= "cedulaDestinatario" placeholder="Cedula Destinatario"/>
        </div>
        <div className="col-md-6">
            <label for="DirEntrega" className="form-label">Dirección de entrega</label>
            <input type="text" className="form-control" name="textDirEntrega" id="DirEntrega" placeholder="Ciudad Entrega"/>
        </div>
        <div className="col-md-6">
            <label for="ciudadEntrega" className="form-label">Ciudad de entrega</label>
            <input type="text" className="form-control" name="textCiudadEntrega" id="ciudadEntrega" placeholder="Ciudad Entrega"/>
        
        </div><br/><br/>

        <div className="col-12">
          <input type="submit" value="órden" name="btncrearOrden" className="btn btn-primary"/>

        </div>
        
      </form>
    
 
  
     
    )
    
   
}
export default FormularioOrden