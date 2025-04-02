import React, { useState } from 'react';
import './FormularioOrcamento.css'; 

const FormularioOrcamento = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagemSucesso('Orçamento solicitado com sucesso!');
    
    // Limpa os campos após o envio
    setNome('');
    setEmail('');
    setDescricao('');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Solicitar Orçamento</h1>
      {mensagemSucesso && <p className="success-message">{mensagemSucesso}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição do Serviço:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-button">Enviar Solicitação</button>
      </form>
    </div>
  );
};

export default FormularioOrcamento;
