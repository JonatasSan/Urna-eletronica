import React from 'react'

import '../Styles/Teclado.css'

const teste = [];
var teste1 = "";

const Teclado = (props) => {
    
    function cleanFields() {
        
        while (teste.length) {
            teste.pop()
        }

        props.setNumCandidato('')
    }

    function clicou(n) {
        const maxSize = props.etapaAtual === 0 ? 5 : 2

        teste.push(n);
        teste1 = "";
        
        if (teste.length <= maxSize) {
            for (let i = 0; i < teste.length; i++) {
                const element = teste[i];
                teste1 += element + ";";
            }
            
            teste1 = teste1.substring(0, teste1.length - 1);    
            props.setNumCandidato(teste1);
        }

    }

    function branco() {
    }
    function confirma() {
        let mudarEtapa = props.etapaAtual + 1
        props.setEtapaAtual(mudarEtapa)
        cleanFields()
    }
    function corrige() {
        cleanFields()
    }

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao" onClick={() =>clicou(1)}>1</button>
                    <button className="botao" onClick={() =>clicou(2)}>2</button>  
                    <button className="botao" onClick={() =>clicou(3)}>3</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(4)}>4</button>  
                    <button className="botao" onClick={() =>clicou(5)}>5</button>  
                    <button className="botao" onClick={() =>clicou(6)}>6</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(7)}>7</button>
                    <button className="botao" onClick={() =>clicou(8)}>8</button>
                    <button className="botao" onClick={() =>clicou(9)}>9</button>
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(0)}>0</button>
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
export default Teclado