
import { React, useState, useEffect } from "react";

import '../Styles/Tela.css'
import { dados } from "./dados";

import Teclado from "./Teclado";

export default function Tela() {  

    function digito() {
        return {__html: ''};
        // dangerouslySetInnerHTML={digito()}
      
    }
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [registro, setRegistro] = useState({});    

    const [candidato, setCandidato] = useState({});
    const [numCandidato, setNumCandidato] = useState("");    
    
    function Numero() {
        const inputNumeros = [];
        
        const myArr = numCandidato.split(";");
        
        for (let i = 0; i < registro.numeros; i++) {                                   
            inputNumeros.push(<input key={i} type="number" className="nume" value={myArr[i]} /> );
        }                

        return inputNumeros;
    }

    useEffect(() => {
        setRegistro(dados[etapaAtual]);
    }, [etapaAtual]);

    useEffect(() => {          
        
        const numText = numCandidato.replaceAll(";", "");
    
        const candidatos = registro.candidatos;
        if (candidatos) {                     
            const candidato = candidatos.filter(candidato => candidato.numero == numText);
            setCandidato(candidato[0]);       
        }  
    }, [numCandidato]);

    return(
        <div className="principal">
            <div className="tela">
                <div className="voto">
                    <div className="esquerda">
                        {/* <div className="e-1">
                            <span>Seu voto para:</span>
                        </div> */}
                        <div className="e-2">
                            <span>{registro.titulo}</span>
                        </div>
                        <div className="e-3">
                            <Numero/>                            
                        </div>
                        <div className="e-4">
                            <span>{candidato && candidato.nome}</span> <br />
                            <span>{candidato && candidato.partido} </span> <br />
                            <span> {candidato && candidato.nomeVice}</span> <br />
                        </div>
                    </div>
                    <div className="direita">
                        <div className="avatar">
                            <img src={candidato && candidato.foto} alt="" />
                            {candidato && candidato.legenda}
                        </div>
                        <div className="avatar v">
                            <img src={candidato && candidato.foto2}alt="" />
                        </div>
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