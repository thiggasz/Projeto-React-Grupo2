import React from 'react';
import ImgLogo from './images/logo.png';
import ImgInicial from './images/inicio.png';
import ImgRodape from './images/rodape.png';
import './styles/inicio.css';


export default function Page() {
    return (
        <React.Fragment>
           <div className='header'>
                <img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img>

                <div className='buttons'>
                    <div className='button'><a href="/cadastro">Nova Consulta</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}