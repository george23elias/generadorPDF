import React from "react";
import Pantalla from "./components/PantallaCarga/Pantalla/Pantalla";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <div>
      <Pantalla Chilche={Inicio()} />
      {/* <Inicio /> */}
    </div>
  );
}

export default App;
