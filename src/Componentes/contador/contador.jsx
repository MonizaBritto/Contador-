import React, {useState} from 'react'

function Contador(){

//sintaxe do useState
const [numero, setNumero]= useState(0)

//FUnção para adicionar um valor para quando clicar no botão

function Add(){
    if(numero < 25){
        setNumero(numero + 1)
    }
}

function Remove(){
    if(numero > 0){
    setNumero(numero - 1)
    }
}

function Clear(){
    setNumero(0)
}

    return(
        <>
             <h1>{numero}</h1>
             <button onClick={Add}>+</button>
             <button onClick={Remove}>-</button>
             <button onClick={Clear}>Clear</button>
            
        </>
    )
}

export default Contador