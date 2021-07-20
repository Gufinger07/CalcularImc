import React, { Component } from 'react';
import imagem from "../../assets/image/classificacao.png"
import "./estilo.css"
class ClassificacaoImc extends Component {

    render() {
        return (
            <section className="sessao-imagem">
                <img className="imagem-tabela" src= {imagem} />
            </section>
        )
    }
}

export default ClassificacaoImc