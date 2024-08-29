import "./NovaAtividade.css";
// import {adcionarTarefa} from "./ListaAtividades";
import React, { useState } from 'react';
import Atividade from "./Atividade";


export default function NovaAtividade() {
  const [nomeAtividade, setNomeAtividade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');
  const [vetor, setVetor] = useState([]);

  const handleChangeAtividade = (event) => {
    setNomeAtividade(event.target.value);
  };
  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };
  const handleChangePrazo = (event) => {
    setPrazo(event.target.value);
  };

  const handdleDelete = (index) => {
    const newArray = vetor.filter((_, i) => i !== index);
    setVetor(newArray);
  } 



  const handleSave = () =>{
    const atividade = {
      "nomeAtividade": nomeAtividade,
      "descricao": descricao,
      "prazo": prazo
    }
      
    setVetor([...vetor, atividade])
  }

  const handleSbmit = (e) => {
    e.preventDefault()
    handleSave()
  };
    
    return (
      <>
        <div>
          <form className="novaAtividade" onSubmit={handleSbmit}>
            <label htmlFor="nomeAtividade">Nome da atividade:</label>
              <input type="text" id="nomeAtividade" value={nomeAtividade} onChange={handleChangeAtividade}></input>
            <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" value={descricao} onChange={handleChangeDescricao}></input>
          <label htmlFor="prazo">
              razo
          </label>
          <input type="text" id="prazo" value={prazo} onChange={handleChangePrazo}></input>
          <button type="submit">Confirmar</button>
          </form>
        </div>

        {vetor.map((vet, index) => (
           <>
            <Atividade key={index} nomeAtividade={vet.nomeAtividade} descricao={vet.descricao} prazo={vet.prazo}/>
            <button onClick={() => handdleDelete(index)}>Excluir</button>
           </>
 
        ))}

      </>

    );
  }




