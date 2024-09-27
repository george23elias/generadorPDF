import React from "react";
import "./registrar.css";
import fondopdf from "../../img/fondo/pdffile-blanco.png";
import fondopdf2 from "../../img/fondo/pdffile.png";

function Registrar() {
  return (
    <div className="PantallaRegistrar">
      <img src={fondopdf2} alt="" />
      <div className="contenedorRegistrar">
        <div className="RegistrarTitle">
          <h2>Registrarse</h2>
          <h3>Generador PDF</h3>
        </div>
        <form
          onSubmit={() => {
            alert("Registrese!");
          }}
        >
          <input type="text" placeholder="Ingrese su Nombre" />
          <input type="text" placeholder="Ingrese su Apellido" />
          <input type="text" placeholder="Ingrese su Email" />
          <input type="password" placeholder="Ingrese su Contraseña" />
          <input type="password" placeholder="Ingrese su Contraseña" />
          <button type="submit"> Registrar</button>
        </form>
      </div>
      <img src={fondopdf} alt="" />
    </div>
  );
}

export default Registrar;
