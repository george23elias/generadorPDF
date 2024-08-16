import React from "react";
import "./gps.css";

const GPS5 = () => {
  return (
    <div className="GPS5">
      <h2>SECCIÓN B. INSPECCIÓN A PROCEDIMIENTOS DE ATENCIÓN A AERONAVES</h2>
      <div className="GPS5_Cotenedor">
        <h2>PRE-LLEGADA DE AERONAVE</h2>
        <div className="GPS5_SubTitle">
          <h2>INSPECCIONADO:</h2>
          <div>
            <h2>Si:</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>No:</h2>
            <input type="checkbox" />
          </div>
        </div>
        <div className="GPS5_Tercero">
          <h2>S</h2>
          <h2>I</h2>
          <h2>N/A</h2>
          <h2>N/R</h2>
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Posicion libre de FOD RAD24 24.15 A)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Equipos en tierra colocados en posición RAD24 24.73 A) B) 1)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="x" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Inspección previa de la posicion (condiciones) RAD24.79 D)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="" />
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>
          Equipos requeridos en posición y personal atento CA-1400-07 9.0)
          9.6.3) D)
        </h2>
        <div className="GPS5_Tercero">
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="x" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>
          Puente de abordaje retraído y libre de obstaculo (si aplica) RAD24
          24.79 C) 6)
        </h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
    </div>
  );
};

const GPS6 = () => {
  return (
    <div className="GPS5">
      <div className="GPS5_Cotenedor">
        <h2>LLEGADA DE UNA AERONAVE / DESCARGA Y CARGA</h2>
        <div className="GPS5_SubTitle">
          <h2>INSPECCIONADO:</h2>
          <div>
            <h2>Si:</h2>
            <input type="checkbox" />
          </div>
          <div>
            <h2>No:</h2>
            <input type="checkbox" />
          </div>
        </div>
        <div className="GPS5_Tercero">
          <h2>S</h2>
          <h2>I</h2>
          <h2>N/A</h2>
          <h2>N/R</h2>
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Instrucciónyguiadeseñaleroalaaeronave RAD2424.79E)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Estacionamiento correcto marca T CA-1400-07 9.0) 9.7) A)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Colocación de calzos y conos (aeronave) RAD24 24.79 C) 5)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Puente de abordaje y/o escalera de pasajeros RAD24 24.93</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
      {/* ----Contenedor 2 ------ */}
      <div className="GPS5_Cotenedor2">
        <h2>Proceso operacional de equipos RAD24 24.77 C) 1) 2) 3)</h2>
        <div className="GPS5_Tercero">
          <input type="button" value="x" />
          <input type="button" value="" />
          <input type="button" value="" />
          <input type="button" value="" />
        </div>
      </div>
    </div>
  );
};

function GPS() {
  return (
    <>
      <GPS5 />
      <GPS6 />
    </>
  );
}

export default GPS;
