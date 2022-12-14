import './App.css';
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function App2() {

  const navigate = useNavigate(); 
  



  const handleSubmit =(event)=>{
   
    event.preventDefault();
    const data =new FormData(event.target);
    const UserCreate =
    {
      usuario: data.get("Nombre"),
      pass: data.get("Pass"),
      email: data.get("email"),
      ciudad: data.get("Ciudad"),
      direccion: data.get("Direccion"),
     

    }
    console.log('respuesta de ENVIO DE DATOS', UserCreate)

    const requestOptionsValidate = {method: 'POST', headers: { 'Content-Type': 'application/json'},      
    body: JSON.stringify(UserCreate) };    
    fetch('http://localhost:5000/usuarios/login', requestOptionsValidate)   // ruta del back
    .then(response => response.json())        
    .then(data => { console.log('respuesta de consulta Usuario', data);
    if(data.token == null ){
      
      const requestOptions = {method: 'POST', headers: { 'Content-Type': 'application/json'},      
      body: JSON.stringify(UserCreate) };    
      fetch('http://localhost:5000/usuarios/reg', requestOptions)   // ruta del back
      .then(response => response.json())        
      .then(data => { console.log('respuesta de consulta', data);
      alert("Usuario Creado con exito")

   });

    

    
    
    
    
    }
    if(data.token !== null ){
      
      alert("Usuario Ya existe")
      navigate('/Registro');
    }  

 });

 
  
   
  }


  return (

    <div className="container w-75 bg-primary mt-1 rounded shadow">
    <div className="row align-items-stretch">
        <div className="col bge d-none d-lg-block col-md-5 col-lg-5 col-xl-6">

        </div>
        <div className="col bg-white p-2 rounded-end">  {/* <!-- FORMULARIO  --> */}
            <div className="text-end">
                <img src="../static/imagenes/24-horas.gif" width="75" alt=""/>
            </div>

            <h2 className="fw-bold text-center py-4">Registrarse Usuario Nuevo</h2>

            {/* <!--  LOGIN  --> */}

            <form name='FormsCrear' onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="" placeholder="Ingrese Correo Electronico"/>
                  </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Contrase??a</label>
                  <input type="password" className="form-control" name="Pass" id="" placeholder="Ingrese Contrase??a"/>
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Confirmar Contrase??a</label>
                  <input type="password" className="form-control" name="Password" id="" placeholder="Ingrese Contrase??a"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Direccion de Residencia</label>
                  <input type="text" className="form-control" name="Direccion" id="" placeholder="1234 Main St"/>
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Ciudad</label>
                  <input type="text" className="form-control" name="Ciudad" id=""/>
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">Nombre Usuario</label>
                  <input type="text" className="form-control" name="Nombre" id=""/>
                </div>
                {/* <!-- <div className="col-md-4">
                  <label for="inputState" className="form-label">Estado Solicitud</label>
                  <select id="inputState" className="form-select" name="textTipoUser">
                    <option selected>Administrador</option>
                    <option>Usuario</option>
                  </select>
                </div> --> */}
                {/* <!-- <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required>
                    <label className="form-check-label" for="gridCheck">
                      Confirmar Solicitud
                    </label>
                  </div>
                </div> --> */}
                <div className="col-12">
                  <input type="submit" value="Registrarse" name="btnGuardar" className="btn btn-primary"/>
                </div>
                <div className="my-1">
                  
                  <span>
                  <Link to="/" >
                  Iniciar Sesion
                    </Link>

                  </span>
                     <br/>
              </div>
              </form>

            {/* <!-- LOGIN CON REDES SOCIALES --> */}

            <div className="container w-100 my-1">
                <div className="row text-center">
                    <div className="col-12 ">
                        {/* <!-- Iniciar Sesi??n --> */}
                    </div>
                <div className="row">
                    <div className="col" >
                      {/* <!-- <a href="https://www.facebook.com/" Target="_blank">
                        <button className="btn btn-outline-primary w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src="../static/imagenes/facebook.png" width="32" alt="">
                                </div>
                                <div className="col-10 text-center">
                                    Facebook
                                </div>
                            </div>
                        </button>
                      </a> --> */}
                    </div>
                    <div className="col">
                      {/* <!-- <a href="https://www.google.com/" Target="_blank">
                        <button className="btn btn-outline-danger w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src="../static/imagenes/google.png" width="32" alt="">
                                </div>
                                <div className="col-12 col-md-10 text-center">
                                    Google
                                </div>
                            </div>
                        </button>
                      </a> --> */}
                    </div>
                </div>                        

                </div>
            </div>

        </div>
    </div>
</div>


  );
}

export default App2;
