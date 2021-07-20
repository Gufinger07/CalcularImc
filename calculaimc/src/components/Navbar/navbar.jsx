import React, { Component } from 'react';
import fitness from "../../assets/image/fitness.svg"
import "./estilo.css"
class NavBar extends Component {
    render() {
        return (
            <section className="sessao">
                <h1 className="sessao-titulo"> <img src={fitness} alt="Imagem fitness" /> Índice de Massa Corpórea <img src={fitness} alt="Imagem fitness" /> </h1>
            </section>
            
        )
    }
}
export default NavBar