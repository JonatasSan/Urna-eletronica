
import { React, useState, useEffect } from "react";

import '../Styles/Tela.css'
import { dados } from "./dados";

import Teclado from "./Teclado";

export default function Tela() {  

    function digito() {
        return {__html: ''};
      
    }
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [registro, setRegistro] = useState({});    

    const [candidato, setCandidato] = useState({});
    const [numCandidato, setNumCandidato] = useState(); {
        console.log(numCandidato)
    }

    
    function Numero() {
        const inputNumeros = [];
        for (let i = 0; i < registro.numeros; i++) {
            if (i == 0){
                inputNumeros.push(<div dangerouslySetInnerHTML={digito()} key={i} type="number" className="nume pisca"></div> );
            }else {
                inputNumeros.push(<div key={i} type="number" className="nume"></div> );
            }                   
        }                
        return inputNumeros;
    }

    useEffect(() => {
        setRegistro(dados[etapaAtual]);
    }, [etapaAtual]);

    useEffect(() => {        
        const candidatos = registro.candidatos;
        if (candidatos) {
            const candidato = candidatos.filter(candidato => candidato.numero === numCandidato);
            setCandidato(candidato[0]);       
        }        
    }, [numCandidato]);

    return(
        <div className="principal">
            <div className="tela">
                <div className="voto">
                    <div className="esquerda">
                        <div className="e-1">
                            <span>Seu voto para:</span>
                        </div>
                        <div className="e-2">
                            <span>{registro.titulo}</span>
                        </div>
                        <div className="e-3">
                            <Numero/>             
                        </div>
                        <div className="e-4">
                            <span>Nome: {candidato && candidato.nome}</span> <br />
                            <span>Partido: {candidato && candidato.partido} </span> <br />
                            {/* <span>Vice-Prefeito: </span> <br /> */}
                        </div>
                    </div>
                    <div className="direita">
                        <div className="avatar">
                            <img src={candidato && candidato.foto} alt="" />
                        </div>
                        {/* <div className="avatar v">
                            <img src=""alt="" />
                            Vice-Prefeito
                        </div> */}
                    </div>
                </div>
                <div className="linha"/>
                <div className="instrucao">
                    <span>Aperte a tecla:</span><br />
                    <span>BRANCO para VOTAR EM BRANCO</span><br />
                    <span>LARANJA para CORRIGIR</span><br />
                    <span>VERDE para CONFIRMAR</span><br/>
                </div>
            </div>
            <Teclado setEtapaAtual={setEtapaAtual} setNumCandidato={setNumCandidato} />
            {/* <button onClick={() => setNumCandidato(30100)}>teste1</button>
            <button onClick={() => setNumCandidato(45600)}>teste2</button> */}
            <h1></h1>
        </div>
    )
}