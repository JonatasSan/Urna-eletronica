import React from 'react'

import '../Styles/Teclado.css'

export default function Teclado() {

    function clicou (n){
        alert("clicou em "+n);
    }
    function branco (){
        alert("clicou em BRANCO!");
    }
    function corrige (){
        alert("clicou em CORRIGE!");
    }
    function confirma (){
        alert("clicou em CONFIRMA");
    }

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao" onClick={clicou}>1</button>
                    <button className="botao" onClick={clicou}>2</button>
                    <button className="botao" onClick={clicou}>3</button>
                </div>
                <div>
                    <button className="botao" onClick={clicou}>4</button>
                    <button className="botao" onClick={clicou}>5</button>
                    <button className="botao" onClick={clicou}>6</button>
                </div>
                <div>
                    <button className="botao" onClick={clicou}>7</button>
                    <button className="botao" onClick={clicou}>8</button>
                    <button className="botao" onClick={clicou}>9</button>
                </div>
                <div>
                    <button className="botao" onClick={clicou}>0</button>
                </div>
            </div>
            <div>
                <button className="botao branco" onClick={branco}>BRANCO</button>
                <button className="botao corrige" onClick={corrige}>CORRIGE</button>
                <button className="botao confirma" onClick={confirma}>CONFIRMA</button></div>
            </div>
    )
}