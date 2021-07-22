import React, { Component } from 'react';
import "./estilo.css"
class Form extends Component {
    
    constructor(props) {
        super(props)
        this.altura = " "
        this.peso = " "
        this.resultado = " "
    }

    _getNovoResultado(event) {
        event.preventDefault()
        event.stopPropagation()
        if(this.peso && this.altura != 0) {
            this.resultado = this.peso / (this.altura * this.altura)
            this.resultado = parseFloat(this.resultado).toFixed(2)
            this.props.criarResultado(this.resultado)
        }
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
        
    }

    _handleLimpaForm(event) {
        event.preventDefault()
        event.stopPropagation()
        this.resultado = " "
        this.props.limpaFormulario(this.resultado)
        
    }
    
    render() {
        return (
            <form onSubmit={this._getNovoResultado.bind(this)} className="sessao-form">
                <input className="form-input" type="number" step="0.01" min="0" max="3" placeholder="Informe sua altura (ex: 1,80)"
                onChange={this._handleGetAltura.bind(this)}/>
                <input className="form-input" type="number" step="0.01" min="20" max="200" placeholder="Informe seu peso (ex: 70 Kg)"
                onChange={this._handleGetPeso.bind(this)}/>
                <div className="botao form-resultado">
                    <h3 className="resultadoimc"> Seu IMC: <span>{this.resultado}</span></h3>  
                </div>
                <button className="botao botao-calcular" type="submit">Calcular</button>
                <button onClick={this._handleLimpaForm.bind(this)} className="botao botao-limpar" type="button">Limpar</button>
            </form>
        )
    }
}

export default Form