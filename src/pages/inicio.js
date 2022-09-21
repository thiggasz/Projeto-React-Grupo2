import React from 'react'
import ImgInicio from './inicio.png'
import EstIni from './styles/inicio.css'

export default function Home(){
    return( 
        <React.Fragment>
            <div className='tituloinc'>Bem vindo ao MeuPet!</div>
            <div className='corpo'>Nosso objetivo é tornar a sua experiência cada vez mais fácil. Pensando nisso, o MeuPet foi 
                desenvolvido para facilitar o gerenciamento da sua clínica veterinária, contando com funções que
                permitem o cadastro de animais e espécies, entre outras que visam facilitar a organização das consultas. 
                Uma admnistração cada vez melhor para o melhor dos seus pacientes.

                Aperte no botão ao lado para começar a utilizar o MeuPet!
                <img src={ImgInicio} className='img' height={566} alt="Cachorro"></img>
            </div>
            <div>
                <a href="./cadastro"><button className='botao' type='button'>Cadastrar</button></a>
            </div>
        </React.Fragment>
    )
}