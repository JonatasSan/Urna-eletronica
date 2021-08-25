
import { React, useState } from "react";

import '../Styles/Tela.css'


export default function Tela() {
    
    let Candidatos = [
        {
            titulo: 'VEREADOR',
            numeros: 5,
            candidatos: [
                {
                    numero: 30100,
                    nome: 'Jonatas Santos',
                    partido: 'PDEV',
                    fotos: [
                        {url: 'https://avatars.githubusercontent.com/u/83596473?v=4',
                         legenda: 'Vereador'
                        }
                    ]
                },
                {
                    numero: 45600,
                    nome: 'Rogerio Manella',
                    partido: 'PSDB',
                    fotos: [
                        {url: 'https://avatars.githubusercontent.com/u/25174?v=4',
                         legenda: 'Vereador'
                        }
                    ]
                },
            ]
        },
        {
            titulo: 'PREFEITO',
            numeros: 2,
            candidatos: [
                {
                    numero: 30,
                    nome: 'LEONARDO TELLES',
                    partido: 'PDEV',
                    fotos: [
                        {url: 'https://avatars.githubusercontent.com/u/28353500?v=4',
                         legenda: 'Prefeito',
                         url: 'https://avatars.githubusercontent.com/u/30236552?v=4',
                         legenda: 'Prefeito',
                        }
                    ]
                },
                {
                    numero: 45600,
                    nome: 'Rogerio Manella',
                    partido: 'PSDB',
                    fotos: [
                        {url: 'https://avatars.githubusercontent.com/u/25174?v=4',
                         legenda: 'Vereador'
                        }
                    ]
                },
            ]
        }
    ]
    
    const [seuVoto, setseuVoto] = useState("");
    const [cargo, setCargo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [aviso, setAviso] = useState("");
    const [lateral, setLateral] = useState("");
    const [numeros, setNumeros] = useState("");

    return(
        <div className="tela">
            <div className="voto">
                <div className="esquerda">
                    <div className="d-1">
                        <span>SEU VOTO PARA:</span>
                    </div>
                    <div className="d-2">
                        <span>{cargo}</span>
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