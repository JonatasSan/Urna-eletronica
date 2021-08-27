import React from 'react'

import '../Styles/Teclado.css'

export default props => {

    function clicou(n) {
        props.setNumCandidato(n)
    }
    function branco() {
    }
    function confirma() {
        props.setEtapaAtual(1)
    }
    function corrige() {
    }

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao" onClick={() =>clicou("1")}>1</button>
                    <button className="botao" onClick={() =>clicou("2")}>2</button>  
                    <button className="botao" onClick={() =>clicou("3")}>3</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou("4")}>4</button>  
                    <button className="botao" onClick={() =>clicou("5")}>5</button>  
                    <button className="botao" onClick={() =>clicou("6")}>6</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou("7")}>7</button>
                    <button className="botao" onClick={() =>clicou("8")}>8</button>
                    <button className="botao" onClick={() =>clicou("9")}>9</button>
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou("0")}>0</button>
                </div>
            </div>
            <div>
                    <button className="botao branco" onClick={() =>branco()}>BRANCO</button>
                    <button className="botao corrige" onClick={() =>corrige()}>CORRIGE</button> 
                    <button className="botao confirma" onClick={() => confirma()}>CONFIRMA</button>  
            </div>
        </div>
        
    )
}