import React, { useState, useEffect } from "react";
import { Mainbox } from "./style";

const App = () => {
  const [produtos,setProdutos] = useState([""]);
  const [produto,setProduto] = useState("");
  const [count,setCount] = useState(0);

  const adicionarProduto = () => {
    if(produto !== ""){
      setProdutos([...produtos,produto]);
      setProduto("");
      setCount(count + 1);
    }
  }

  useEffect(() => {
    setProdutos((products) => products.filter((_, index) => index !== 0));
  },[])

  const deletarProduto = () => {
    setProdutos((products) => products.filter((_, index) => index !== 0));
    if(count > 0){
      setCount(count - 1);
    }
  }

  const limparProduto = () => {
    setProdutos([]);
    setCount(0);
  }

  return (
    <Mainbox>
        <h1>Lista de Produtos</h1>
        <div className="searchSpace">
          <input value={produto} onChange={(event) => {
            setProduto(event.target.value)
          }} />
          <button className="inserir" onClick={adicionarProduto} >Inserir</button>
        </div>
      <div className="spaceEscolha">
        <button onClick={deletarProduto} >Deletar</button>
        <button onClick={limparProduto} >Limpar</button>
        <h2>Numero de Items: {count}</h2>
        <hr></hr>
        {produtos.map((nm) =>(
          <h3>{nm}</h3>
        ))}
      </div>
    </Mainbox>
  );
}

export default App;