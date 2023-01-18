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
      <div className="spaceEscolha">
        <div>Lista de Produtos</div>
        <div>
          <input value={produto} onChange={(event) => {
            setProduto(event.target.value)
          }} />
          <button onClick={adicionarProduto} >Inserir</button>
          <button onClick={deletarProduto} >Deletar</button>
          <button onClick={limparProduto} >Limpar</button>
        </div>
        <div>Numero de Items: {count}</div>
      </div>
      {produtos.map((nm) =>(
        <div>{nm}</div>
      ))}
    </Mainbox>
  );
}

export default App;