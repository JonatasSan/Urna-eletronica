
import { React, useState, useEffect } from "react";

import '../Styles/Tela.css'
import { dados } from "./dados";

import Teclado from "./Teclado";

export default function Tela() {  

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [registro, setRegistro] = useState({});    
    const [candidato, setCandidato] = useState({});
    const [numCandidato, setNumCandidato] = useState("");    
    
    function Numero() {
        const inputNumeros = [];
        
        const myArr = numCandidato.split(";");
        
        for (let i = 0; i < registro.numeros; i++) {                                   
            inputNumeros.push(<input key={i} type="number" className="numeros" defaultValue={myArr[i]} />);
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
                        <div className="e-1">
                            <span>{registro.legenda}</span>
                        </div>
                        <div className="e-2">
                            <span>{registro.titulo}</span>
                        </div>
                        <span className="fim">{registro.finaliza}</span>
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
                            <span>{candidato && candidato.legenda}</span>
                        </div>
                        <div className="avatar v">
                            <img src={candidato && candidato.foto2}alt="" />
                            <span>{candidato && candidato.legenda2}</span>
                        </div>
                    </div>
                </div>
                {etapaAtual!==2 && 
                <div className="instrucao">
                    <div className="linha"/>
                    <span>Aperte a tecla:</span><br />
                    <span>VERDE para CONFIRMAR</span><br/>
                    <span>LARANJA para CORRIGIR</span><br />
                    <span>BRANCO para votar em BRANCO</span><br />
                </div>
                }
            </div>
            <Teclado
                etapaAtual={etapaAtual}
                setEtapaAtual={setEtapaAtual}
                setNumCandidato={setNumCandidato} 
            />
        </div>
    )
}