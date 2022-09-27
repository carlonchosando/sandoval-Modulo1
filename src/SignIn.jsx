import React,{Component} from "react";

class SignIn extends Component {
    render(){
        return(
          <>
            <div className="contenedor">
                <h2>Inscripcion</h2>
                <form className="nuevoUsuario">
                    <div>
                        <label className="nombre">Nombre</label>
                         <input type="text" className="nombre" placeholder="Ingresa tu Nombre"/>
                    </div>
                    <div>
                        <label className="apellido">Apellido</label>
                        <input type="text" className="apellido" placeholder="Ingresa tu Apellido" />
                    </div>
                    <div>
                        <label className="e-mail" >E-mail</label>
                        <input type="text" className="e-mail" placeholder="ingresar E-mail"/>
                    </div>
                    <div>
                        <label className="telefono">Telefono</label>
                        <input type="text" className="telefono" placeholder="ingresar Numero de Telefono" />
                    </div>

                                     
                </form>    
            </div>
          
          </>
        )
    }
};
export default SignIn;