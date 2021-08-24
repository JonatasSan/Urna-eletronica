import React from 'react'

import '../Styles/Tela.css'

export default function Tela() {

    var seuVoto = document.querySelector('.d-1 span')

    return(
        <div className="tela">
            <div className="voto">
                <div className="esquerda">
                    <div className="d-1">
                        <span>SEU VOTO PARA:</span>
                    </div>
                    <div className="d-2">
                        <span></span>
                    </div>
                    <div className="d-3">                       
                        <input type="text" maxLength="1" className="nume"/>
                        <input type="text" maxLength="1" className="nume"/>
                    </div>
                    <div className="d-4">
                        <span>Nome: </span> <br />
                        <span>Partido: </span> <br />
                        <span>Vice-Prefeito: </span> <br />
                    </div>
                </div>
                <div className="direita">
                    <div className="avatar">
                        <img src="" alt="" />
                        Prefeito
                    </div>
                    <div className="avatar v">
                        <img src="" alt="" />
                        Vice-Prefeito
                    </div>
                </div>
            </div>
            <div className="instrucao">
                <span>Aperte a Tela:</span><br />
                <span>CONFIRME para CONFIRMAR este voto.</span><br/>
                <span>CORRIGE para REINICIAR este voto.</span><br />
            </div>
        </div>
    )
}