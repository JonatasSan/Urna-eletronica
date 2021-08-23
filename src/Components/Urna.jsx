import React from 'react'

import './Urna.css'

import Tela from './Tela'
import Teclado from './Teclado'

export default function Urna() {
    return(
        <div className="principal" >
            <Tela />
            <Teclado />
        </div>
    )
}