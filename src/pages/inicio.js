import React from 'react';
import ImgInicio from './inicio.png'

export default function Home(){
    return( 
        <React.Fragment>
            <div className='titulo'>Bem vindo ao meupet!</div>
            <div className='corpo'>Nosso objetivo aqui é tornar a sua experiência cada vez mais fácil. Pensando nisso, deselvovemos
                um sistema que permite o cadastro de animais e espécies, permitindo uma admnistração cada vez melhor
                do seus pacientes. Aperter no botão ao lado e comece a utilizar agora mesmo!
                <img src={ImgInicio} className='home' height={565}></img>
            </div>
            <a href="./management"><button className='botao' type='button'>Cadastrar</button></a>
        </React.Fragment>
    )
}