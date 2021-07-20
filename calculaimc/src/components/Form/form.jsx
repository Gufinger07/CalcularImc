import React, { Component } from 'react';
import "./estilo.css"
class Form extends Component {
    
    constructor(props) {
        super(props)
        this.altura = " "
        this.peso = " "
    }
    _handleGetAltura(event) {
        event.preventDefault()
        event.stopPropagation()
        this.altura = event.target.value
        
    }
    
    _handleGetPeso(event) {
        event.preventDefault()
        event.stopPropagation()
        this.peso = event.target.value
        console.log(event.target.value)
    }

    
    
    render() {
        return (
            <section className="sessao-form">
                <input className="form-input" type="number" placeholder="Informe sua altura (ex: 1,80)"
                onChange={this._handleGetAltura.bind(this)}/>
                <input className="form-input" type="number" placeholder="Informe seu peso (ex: 70 Kg)"
                onChange={this._handleGetPeso.bind(this)}/>
                <button className="botao botao-calcular" type="submit">Calcular</button>
                <button className="botao botao-limpar" type="submit">Limpar</button>
            </section>
        )
    }
}

export default Form