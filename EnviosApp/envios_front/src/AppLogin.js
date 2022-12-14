import './App.css';
import { Link} from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault();
        const data =new FormData(event.target);
        data.get("textEmail")
        const userData =
        {
         email: data.get("textEmail"),
         pass:data.get("txtPassword")
        }

            // alert(userData.email)

            const requestOptions = {        method: 'POST', headers: { 'Content-Type': 'application/json' },      
                      body: JSON.stringify(userData) };    
                      fetch('http://localhost:5000/usuarios/login', requestOptions)   // ruta del back
                      .then(response => response.json())        
                      .then(data => { console.log('los datos recibidos fueron', data); 
                      if(data.token !== null ){
                        console.log('intento de redirect')
                        window.localStorage.setItem('username', userData.email)
                        window.localStorage.getItem('username')
                        navigate('/Menu');
                    }
                        else{
                        alert("usuario o contraseña invalida")
                        }
                      
                    });
       }
      
 
    // useEffect(() => {    // POST request using fetch inside useEffect React hook    
    //                 const requestOptions = {        method: 'POST', headers: { 'Content-Type': 'application/json' },      
    //                   body: JSON.stringify({ email: 'jguell@uninorte.edu.co',
    //                                          pass: 'admin'
    //                  })    };    
    //                   fetch('http://localhost:5000/usuarios/login', requestOptions)   // ruta del back
    //                   .then(response => response.json())        
    //                   .then(data => console.log('los datos recibidos fueron', data));
    
    //                   // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //                 }, []);


  return (
    <div className="container w-75 bg-primary mt-1 rounded shadow">
    <div className="row align-items-stretch">
        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6">

        </div>
        <div className="col bg-white p-2 rounded-end">  {/* <!-- FORMULARIO  --> */}
            <div className="text-end">
                <img src="../static/imagenes/24-horas.gif" width="65" alt=""/>
            </div>

            <h2 className="fw-bold text-center py-2">Plataforma de Envío de Paquetes</h2>

            {/* <!--  LOGIN  --> */}

            <form name='FormsLogin' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="email" className="form-label"> Correo Electronico </label>
                    <input type="email" className="form-control" name="textEmail" id=""/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label"> Password </label>
                    <input type="password" className="form-control" name="txtPassword" id=""/>
                </div>
                {/* <!-- <div className="mb-4 form-check">
                    <input type="checkbox" name="connected" className="form-check-input" id="">
                    <label for="connected" className="form-check-label"> Mantenerme Conectado </label>
                </div> --> */}

                <div className="d-grid">
                    {/* <!-- {% for e in error %}
                    <div style="color: red;">{{ e }}</div>
                    {% endfor %} --> */}
                    <input type="submit" value="Iniciar Sesion" className="btn btn-outline-danger w-100 my-1"/>
                </div>

                <div className="my-4">
                    <span>No Tienes Cuenta? 
                    <Link to="/Registro" >
                    Registrate
                    </Link>
                        </span> 
                        <br/>
                    {/* <!-- <span> Olvido Su Contraseña? <a href="#"> Recuperar Password </a></span> {{ url_for('registro')}}  --> */}
                </div>
            </form>

            {/* <!-- LOGIN CON REDES SOCIALES --> */}

            <div className="container w-100 my-4">
                <div className="row text-center">
                    <div className="col-12 m">
                        {/* <!-- Iniciar Sesión --> */}
                    </div>
                <div className="row">
                    <div className="col my-4" >
                      {/* <!-- <a href="https://www.facebook.com/" Target="_blank">
                        <button className="btn btn-outline-primary w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src="/static/imagenes/facebook.png" width="32" alt="">
                                </div>
                                <div className="col-10 text-center">
                                    Facebook
                                </div>
                            </div>
                        </button>
                      </a> --> */}
                    </div>
                    <div className="col my-4">
                      {/* <!-- <a href="https://www.google.com/" Target="_blank">
                        <button className="btn btn-outline-danger w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src="/static/imagenes/google.png" width="32" alt="">
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

export default App;
