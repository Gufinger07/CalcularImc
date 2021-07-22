import React, { Component } from 'react';
import gitIcon from "../../assets/image/github.png"
import linkedin from "../../assets/image/linkedin.png"
import "./estilo.css"
class Rodape extends Component {
    render() {
        return(
            <footer className="rodape">
                <section className="sessao-rodape">
                    <h4>
                        @Gustavo Finger
                    </h4>
                    <a href="https://github.com/Gufinger07/CalcularImc"><img className="icons" src={gitIcon} alt="Imagem Github"/></a>
                    <a href="https://www.linkedin.com/in/gustavo-finger2001/"><img className="icons" src={linkedin} alt="Imagem Linkedin"/></a>
                </section> 
            </footer>
        )
    }
}

export default Rodape