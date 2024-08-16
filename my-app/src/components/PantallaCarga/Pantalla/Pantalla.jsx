import React, { useState, useEffect } from "react";
import "./pantalla.css";

function Pantalla({ Chilche }) {
  const [Time, setTime] = useState(true);
  const [contador, setContador] = useState(0); // Estado para el contador

  useEffect(() => {
    // Solo iniciar el intervalo si el contador es menor a 10
    if (contador < 10) {
      const intervalId = setInterval(() => {
        setContador((prevContador) => {
          const nuevoContador = prevContador + 1;

          if (nuevoContador >= 3) {
            setTime(false); // Cambia el estado después de que el contador llega a 10
          }
          return nuevoContador;
        });
      }, 1000);

      // Limpiar el intervalo cuando el componente se desmonta o cuando el contador llega a 10
      return () => clearInterval(intervalId);
    }
  }, [contador]); // Dependencia en el contador

  if (Time) {
    return (
      <div className="ContainerPantalla">
        <h1>Generador</h1>
        <h2>PDF</h2>
      </div>
    );
  } else {
    return <div>{Chilche}</div>;
  }
}

export default Pantalla;
