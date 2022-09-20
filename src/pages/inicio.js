import React from 'react'
import ImgInicio from './inicio.png'
import EstIni from './styles/inicio.css'

export default function Home(){
    return( 
        <React.Fragment>
            <div className='tituloinc'>Bem vindo ao meupet!</div>
            <div className='corpo'>Nosso objetivo aqui é tornar a sua experiência cada vez mais fácil. Pensando nisso, deselvovemos
                um sistema que permite o cadastro de animais e espécies, permitindo uma admnistração cada vez melhor
                do seus pacientes. Aperter no botão ao lado e comece a utilizar agora mesmo!
                <img src={ImgInicio} className='imghome' height={566} alt="Cachorro"></img>
            </div>
            <div className='botaoinc'>
                <a href="./cadastro"><button className='botao' type='button'>Cadastrar</button></a>
            </div>
        </React.Fragment>
    )
}