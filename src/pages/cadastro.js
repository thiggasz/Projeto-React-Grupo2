import React from 'react';
import EstCad from './styles/cadastro.css'

export default function Register(){
    return(
        <React.Fragment>
            <div className='titulocad' >O que deseja cadastrar?</div>

            <div className='botaocad1'><button className='botao' type='button'>Espécies</button></div>
            <div className='botaocad2'><button className='botao' type='button'>Animais</button></div>
        </React.Fragment>
    )
}