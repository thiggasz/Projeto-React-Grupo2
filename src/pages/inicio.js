import React from 'react';
import ImgLogo from './images/logo.png';
import ImgInicial from './images/inicio.png';
import ImgRodape from './images/rodape.png';
import './styles/inicio.css';


export default function Home() {
    return (
        <React.Fragment>
            <div className='header'>
                <img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img>
                <div className='buttons'>
                    <div className='button'><a href="./login">Entrar</a></div>
                </div>
            </div>
            <div className='lateral'>
                <img src={ImgInicial} className='img' height={500}></img>
            </div>
            <div className='corpo'>
                <h1>Bem vindo ao MeuPet!</h1>
                <p>Nosso objetivo é tornar a sua experiência cada vez mais fácil. Pensando nisso, o <b>MeuPet</b> foi
                    desenvolvido para facilitar o gerenciamento da sua clínica veterinária, contando com funções que
                    permitem o cadastro de animais e espécies, entre outras que visam facilitar a organização das consultas.
                    Uma administração cada vez melhor para o melhor dos seus pacientes.

                    Aperte no botão <b>Entrar</b> para começar a utilizar o MeuPet!</p>
                
            </div>
            <img src={ImgRodape} className='img-rodape' height={200}></img>
            <div>
                
            </div>
        </React.Fragment>
    )
}