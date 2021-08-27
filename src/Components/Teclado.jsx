import React from 'react'

import '../Styles/Teclado.css'

export default props => {

    function clicou(n) {
        return (
            alert(n)
        ) 
    }
    function branco() {
        alert("branco")
    }
    function confirma() {
        props.setEtapaAtual(1);
    }
    function corrige() {
        alert("corrige")
    }

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao" onClick={() =>clicou("1")}>1</button>
                    <button className="botao" onClick={() =>clicou}>2</button>  
                    <button className="botao" onClick={() =>clicou}>3</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou}>4</button>  
                    <button className="botao" onClick={() =>clicou}>5</button>  
                    <button className="botao" onClick={() =>clicou}>6</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou}>7</button>
                    <button className="botao" onClick={() =>clicou}>8</button>
                    <button className="botao" onClick={() =>clicou}>9</button>
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou}>0</button>
                </div>
            </div>
            <div>
                    <button class="botao branco" onClick={() =>branco}>BRANCO</button>
                    <button class="botao corrige" onClick={() =>corrige}>CORRIGE</button> 
                    <button class="botao confirma" onClick={() => confirma()}>CONFIRMA</button>  
            </div>
        </div>
        
    )
}