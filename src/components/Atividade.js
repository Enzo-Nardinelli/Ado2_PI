import "./Atividade.css";
import Descricao from "./Descricao";
import NomeAtividade from "./NomeAtividade";
import Prazo from "./Prazo";
import React, { useState } from 'react';

function Atividade({nomeAtividade, descricao, prazo}) {
  const [conclusao, setConclusao] = useState('Não concluída');
  const [btnState, setBtnState] = useState('Concluir');

  const handleChangeConclusao = (event) => {
    if(conclusao == "Não concluída"){
      setConclusao("Concluída!");
      setBtnState("Cancelar");
    } else {
      setConclusao("Não concluída");
      setBtnState("Concluir");
    }
  };
    return (
        <div className="card"> 
        <NomeAtividade nomeAtividade={nomeAtividade}/>
        <Descricao descricao={descricao}/>
        <Prazo prazo={prazo}/>
        <button onClick={() => handleChangeConclusao()}>{btnState}</button>
        <p>{conclusao}</p>
        

      </div>
    );
  }

export default Atividade;