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
Por que é importante saber o IMC?
 
                </p>
                <h2 className="info-titulo">
                    Por que é importante saber o IMC ?
                </h2>
                <p className="info-texto">
                Saber o IMC é importante para verificar se o peso está de acordo com a altura da pessoa, além de ser importante para saber se existe risco de desenvolver alguma doença. No caso das crianças, o IMC é importante para saber se o desenvolvimento está de acordo com o esperado.

Além disso, sabendo o IMC, é possível também verificar qual o peso ideal e, assim, saber se a pessoa está acima ou abaixo do peso recomendado para a sua idade. Veja como é feito o cálculo do peso ideal.

Apesar do IMC ser fundamental para saber o estado nutricional da pessoa, é importante que sejam avaliados outros parâmetros para saber melhor qual o estado geral de saúde, pois pessoas mais velhas, mulheres grávidas ou pessoas com muitos músculos podem ter o resultado de IMC fora do que é considerado normal, por exemplo. Assim, é necessário que além do IMC e do peso ideal, seja avaliado o nível de hidratação, a massa muscular e o nível de atividade física. 
                </p>
                <h2 className="info-titulo">
                    O que fazer para melhorar o IMC ?
                </h2>
                <p className="info-texto">
                Para melhorar o IMC, é importante verificar se está acima ou abaixo do peso considerado normal. Quando o IMC está na faixa de magreza, é importante consultar um nutricionista que fará uma avaliação completa, indicando um plano alimentar personalizado que priorize o ganho de peso de forma saudável. 
                </p>
                
            </section>
            
        )
    }
    
}

export default InfoMassa