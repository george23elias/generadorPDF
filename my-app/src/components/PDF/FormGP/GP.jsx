import React from "react";
import "./gp.css";
import GPS from "./GPS";
import GPSF from "./GPSF";

const GP3 = () => {
  return (
    <div className="GP3">
      <h2>Horario De Inspecciones</h2>
      <div style={{ display: "flex", gap: "5rem" }}>
        <div className="GP3_H">
          <h2>Hora Inicial:</h2>
          <input type="text" />
        </div>
        <div className="GP3_H">
          <h2>Hora Final:</h2>
          <input type="text" />
        </div>
      </div>
      <div className="GP3_H">
        <h2>Posicion:</h2>
        <input type="text" />
      </div>
    </div>
  );
};

const GP4 = () => {
  return (
    <div className="GP4">
      <h2>SECCIÓN A. INSPECCIÓN AL PERSONAL</h2>
      <div className="GP4Contenedor">
        <div className="GP4Contenedor1">
          <h2>EQUIPOS DE PROTECCIÓN AL PERSONAL (EPP)</h2>
          <div>
            <h2>S</h2> <h2>I</h2>
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Chalecos reflectivos RAD24 24.41 B) 1)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Protección auditiva RAD24 24.41 B) 5)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Calzados adecuados RAD24 24.41 B) 3)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
      </div>
      {/* ------ 2 ---- */}
      <div className="GP4Contenedor">
        <div className="GP4Contenedor1">
          <h2>REQUERIMIENTOS, CONOCIMIENTOS Y COMPORTAMIENTOS DEL PERSONAL)</h2>
          <div>
            <h2>S</h2> <h2>I</h2>
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Chalecos reflectivos RAD24 24.41 B) 1)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Protección auditiva RAD24 24.41 B) 5)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
        <div className="GP4Contenedor2">
          <h2>Calzados adecuados RAD24 24.41 B) 3)</h2>
          <div>
            <input type="button" value="V" />
            <input type="button" value="F" />
          </div>
        </div>
      </div>
    </div>
  );
};

function GP() {
  return (
    <div className="ContainerGP">
      <div className="GPContenedor">
        <h2>AeroPuerto:</h2>
        <input type="text" />
      </div>
      <div className="GPContenedor">
        <h2>Fecha:</h2>
        <input type="text" />
      </div>
      <GP3 />
      <GP4 />
      <GPS />
      <GPSF />
    </div>
  );
}

export default GP;
