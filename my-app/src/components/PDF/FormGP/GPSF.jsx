import React, { useState } from "react";
import "./gpsf.css";

const Columna = ({ id, eliminarFila }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>
        <button onClick={() => eliminarFila(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

function GPSF() {
  const [filas, setFilas] = useState([]);

  // Función para encontrar el primer ID disponible
  const encontrarIdDisponible = () => {
    for (let i = 1; i <= 4; i++) {
      if (!filas.includes(i)) {
        return i;
      }
    }
    return null; // Si todos los IDs del 1 al 4 están en uso
  };

  const agregarFila = () => {
    const nuevoId = encontrarIdDisponible();
    if (nuevoId !== null) {
      setFilas([...filas, nuevoId]);
    }
  };

  const eliminarFila = (id) => {
    setFilas(filas.filter((filaId) => filaId !== id));
  };

  console.log(filas);
  return (
    <div className="Container_GPSF">
      <h2>OBSERVACIONES DEL PERSONAL INSPECCIONADO</h2>
      <table>
        <thead>
          <button onClick={agregarFila}>Agregar</button>
          <tr>
            <th>No.</th>
            <th>NOMBRE</th>
            <th>COMPAÑÍA</th>
            <th>CARGO</th>
            <th>
              No. CARNET <span>P=permiso / O=otro</span>
            </th>
            <th>OBSERVACIÓN</th>
            <th>S</th>
            <th>I</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((id) => (
            <Columna key={id} id={id} eliminarFila={eliminarFila} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GPSF;
