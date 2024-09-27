import React from "react";
import Pantalla from "./components/PantallaCarga/Pantalla/Pantalla";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Logiarse/Login";
import Registrar from "./components/Registrarse/Registrar";

function App() {
  return (
    <div>
      {/* <Pantalla Chilche={Inicio()} /> */}
      {/* <Inicio /> */}
      {/* <Login /> */}
      <Registrar />
    </div>
  );
}

export default App;
