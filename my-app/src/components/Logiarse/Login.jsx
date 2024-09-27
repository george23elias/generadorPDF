import React from "react";
import "./login.css";
import fondopdf from "../../img/fondo/pdfsvgrepo.png";

function Login() {
  return (
    <div className="PantallaLogin">
      <img src={fondopdf} alt="PDF" />
      <div className="contenedorLogin">
        <div className="LoginTitle">
          <h2>Bienvenido</h2>
          <h3>Generador PDF</h3>
        </div>
        <form>
          <input type="text" placeholder="Ingrese su Email" />
          <input type="password" placeholder="Ingrese su contraseña" />
          <button type="submit"> Login</button>
        </form>
        <p>
          No tienes una cuenta? <a href=""> Registrate Aqui!</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
