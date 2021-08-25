import React from 'react'

export default props => {

    function clicou(n) {
        alert("Clicou em " +n)
    }
    function branco() {
        alert("branco")
    }
    function confirma() {
        alert("confirma")
    }
    function corrige() {
        alert("corrige")
    }

    function teste(label) {
        switch (label) {
            case "BRANCO":
                branco();
                break;  
            case "CORRIGE":
                corrige();
                break; 
            case "CONFIRMA":
                confirma();
                break;       
            default:
                clicou(label);    
                break;
        }
    }
   
   return(
        <button className={props.class}
            onClick={() => teste(props.label)}>
            {props.label}
        </button>
   )
}