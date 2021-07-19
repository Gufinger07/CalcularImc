import React, { Component } from 'react';
import "./estilo.css"
class InfoMassa extends Component{
    render() {
        return (
            <section className="info">
                <h2 className="info-titulo">
                    Cálculo IMC
                </h2>
                <p className="info-texto">
                IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.    
                </p>
            </section>
            
        )
    }
    
}

export default InfoMassa