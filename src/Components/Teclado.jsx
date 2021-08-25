import React from 'react'

import '../Styles/Teclado.css'
import Button from './Botoes'

export default function Teclado() {

    // const addDigit = n => this.addDigit(n)
    // const setOperation = op => this.setOperation(op)

    function branco() {
        alert("branco")
    }
    function confirma() {
        alert("confirma")
    }
    function corrige() {
        alert("corrige")
    }

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <Button class="botao" label="1" />
                    <Button class="botao" label="2" />
                    <Button class="botao" label="3" />
                </div>
                <div>
                    <Button class="botao" label="4" />
                    <Button class="botao" label="5" />
                    <Button class="botao" label="6" />
                </div>
                <div>
                    <Button class="botao" label="7" />
                    <Button class="botao" label="8" />
                    <Button class="botao" label="9" />
                </div>
                <div>
                    <Button class="botao" label="0" />
                </div>
            </div>
            <div>
                    <Button class="botao branco" label="BRANCO" />
                    <Button class="botao corrige" label="CORRIGE" />
                    <Button class="botao confirma" label="CONFIRMA" />
            </div>
        </div>
        
    )
}