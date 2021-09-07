import React from 'react'

import '../Styles/Teclado.css'

const arrayNumCandidato = [];
var stringNumCandidato = "";

const Teclado = (props) => {   
    function cleanFields() {       
        while (arrayNumCandidato.length) {
            arrayNumCandidato.pop()
        }
        props.setNumCandidato('')
    }
    function clicou(n) {
        const maxSize = props.etapaAtual === 0 ? 5 : 2
        arrayNumCandidato.push(n);
        stringNumCandidato = "";       
        if (arrayNumCandidato.length <= maxSize) {
            for (let i = 0; i < arrayNumCandidato.length; i++) {
                const element = arrayNumCandidato[i];
                stringNumCandidato += element + ";";
            }
            stringNumCandidato = stringNumCandidato.substring(0, stringNumCandidato.length - 1);    
            props.setNumCandidato(stringNumCandidato);
        }
    }
    function confirma() {
        if (props.etapaAtual < 2){
            let mudarEtapa = props.etapaAtual + 1
            props.setEtapaAtual(mudarEtapa)
            cleanFields()
        }else if (props.etapaAtual === 2){
            props.setEtapaAtual(0)
            cleanFields()
        }
    }
    function corrige() {
        cleanFields()
    }
    function branco() {

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