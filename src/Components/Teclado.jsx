import React from 'react'

import './Teclado.css'

export default function Teclado() {
    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao">1</button><button className="botao" >2</button><button className="botao">3</button>
                </div>
                <div>
                    <button className="botao">4</button ><button className="botao">5</button ><button className="botao">6</button>
                </div>
                <div>
                    <button className="botao">7</button><button className="botao">8</button><button className="botao">9</button>
                </div>
                <div>
                    <button className="botao zero">0</button>
                </div>
            </div>
            <div>
                <button className="botao branco">BRANCO</button><button className="botao corrige">CORRIGE</button><button className="botao confirma">CONFIRMA</button></div>
            </div>
    )
}