import React, { Component } from 'react';
import "./assets/css/App.css"
import './assets/css/index.css'
import "./assets/css/responsivo.css"
import ClassificacaoImc from './components/ClassificacaoImc';
import Form from "./components/Form";
import InfoMassa from "./components/InfoMassa";
import NavBar from "./components/Navbar";
import Rodape from './components/Rodape';

class App extends Component {

  constructor(){
    super();

    this.state = {
      resultado: []
    }
  }
  
  criarResultado(resultado) {
    const novoResultado = {resultado}
    const novoArrayResultado = [this.setState.resultado, novoResultado]
    const novoEstado = {
      resultado: novoArrayResultado
    }
    this.setState(novoEstado)
  }

  limpaFormulario(resultado) {
    const formularioLimpo = {resultado}
    const novoArrayFormulario = [this.setState.resultado, formularioLimpo]
    const novoEstado = {    
      resultado: novoArrayFormulario
    }
    this.setState(novoEstado)
  }


  adicionaMensagem(mensagem) {
    const novaMensagem = {mensagem}
    const novoArrayMensagem = [this.setState.mensagem, novaMensagem]
    const novoEstado = {
      mensagem: novoArrayMensagem
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <main>
        <NavBar />
        <section className="sessao-principal">
          <InfoMassa />
          <Form criarResultado={this.criarResultado.bind(this)}
          limpaFormulario={this.limpaFormulario.bind(this)}
          />
          <ClassificacaoImc />
      </section>
      <Rodape />
      </main>
      
    );
  }
}
  

export default App;
