import React from "react";
import "./inicio.css";
import Perfil from "../../img/lisapamela.jpg";
import GP from "../PDF/FormGP/GP";

const Head = () => {
  return (
    <div className="Inicio_Head">
      <div className="Head_name">
        <h1>Lisa Pamela Concepcion</h1>
      </div>
      <div className="Head_img">
        <img src={Perfil} alt="#" />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Inicio_Body">
      <div className="Body_btn">
        <button>PDF 1</button>
        <button>PDF 2</button>
        <button>PDF 3</button>
      </div>
      <div>
        {/* <GP /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Inicio_Footer">
      <h2>@propiedadTurboExpress</h2>
    </div>
  );
};

function Inicio() {
  return (
    <div className="ContainerInicio">
      <Head />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default Inicio;
