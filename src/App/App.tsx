import React, { useState } from "react";
import { Mainbox } from "./index";

const App = () => {
  const [usuarios,setUsuarios] = useState(["valor1","valor2","valor3"]);
  const [usuario,setUsuario] = useState("");

  const adicionarUsuario = () => {
    setUsuarios([...usuarios,usuario]);
    setUsuario("");
    console.log("ola");
  }

  return (
    <Mainbox>
      <div>Lista de Produtos</div>
      <div>
        <input value={usuario} onChange={(event) => {
          setUsuario(event.target.value)
        }} />
        <button onClick={adicionarUsuario}>Inserir</button>
      </div>
      {usuarios.map((nm) =>(
        <div>{nm}</div>
      ))}
    </Mainbox>
  );
}

export default App;
