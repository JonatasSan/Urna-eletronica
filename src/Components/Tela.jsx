
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
    const [numCandidato, setNumCandidato] = useState(0); //useState(0);
    
    function Numero() {
        const inputNumeros = [];
        for (let i = 0; i < registro.numeros; i++) {
            if (i == 0){
                inputNumeros.push(<div dangerouslySetInnerHTML={digito()} key={i} type="number" maxLenght="1" className="nume pisca"></div> );
            }else {
                inputNumeros.push(<div key={i} type="number" maxLenght="1" className="nume"></div> );
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
                    <div className="d-1">
                        <span>SEU VOTO PARA:</span>
                    </div>
                    <div className="d-2">
                        <span>{registro.titulo}</span>
                    </div>
                    <div className="d-3">
                        <Numero></Numero>                   
                    </div>
                    <div className="d-4">
                        <span>Nome: </span> <br />
                        <span>Partido: </span> <br />
                        <span>Vice-Prefeito: </span> <br />
                    </div>
                </div>
                <div className="direita">
                    <div className="avatar">
                        <img src="https://avatars.githubusercontent.com/u/83596473?v=4" alt="" />
                        Prefeito
                    </div>
                    <div className="avatar v">
                        <img src="https://avatars.githubusercontent.com/u/83596473?v=4"alt="" />
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
            <Teclado setEtapaAtual={setEtapaAtual} />
            <button onClick={() => setNumCandidato(30100)}>teste1</button>
            <button onClick={() => setNumCandidato(45600)}>teste2</button>
            <h1>{candidato && candidato.nome}</h1>
        </div>
    )
}