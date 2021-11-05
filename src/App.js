import React, { useState} from 'react';
import './App.css';
import api from './services/api'

export default function App() {


  const [cep, setCep] = useState(0)
  const [dadosCep, setDadosCep] = useState([])
  const feedbackEndereco = 'Não existe';

  async function buscarCep() {
    const dados = await api.get(`${cep}/json`).then((response) => response.data)
    setDadosCep(dados)
  }

  return (
      <div>
        <input
          type="number"
          placeholder="digite o cep apenas com numeros"
          className="input"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className="btnBuscaCep" onClick={buscarCep}>
          Buscar Cep
        </button>
        <div>
          <h1>Bairro: {dadosCep.bairro ? dadosCep.bairro : feedbackEndereco}</h1>
          <h1>Cep: {dadosCep.cep ? dadosCep.cep : feedbackEndereco}</h1>
          <h1>Complemento: {dadosCep.complemento ? dadosCep.complemento : feedbackEndereco}</h1>
          <h1>DDD: {dadosCep.ddd ? dadosCep.ddd : feedbackEndereco}</h1>
          <h1>localidade: {dadosCep.localidade ? dadosCep.localidade : feedbackEndereco}</h1>
          <h1>logradouro: {dadosCep.logradouro ? dadosCep.logradouro : feedbackEndereco}</h1>
        </div>
      </div>
  )
}