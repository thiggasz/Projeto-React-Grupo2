import React from 'react'
import ImgCad from './cad.jpg'
import ImgLogo from './logo.png'
import EstCad from './styles/cadastro.css'

export default function Register() {
    return (
        <React.Fragment>
            <div className='header'>
                <a href="./"><img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img></a>
                <div className='buttons'>
                    <div className='button'><a href="./gerenciamento">Gerenciamento</a></div>
                </div>
            </div>
            <form className='formulario'>
                <div>
                    <div className='alinhamentocad'>
                        <label for='Nome'>Nome do paciente:</label>
                        <input type='text' name='Nome' id='Nome' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Idade'>Idade:</label>
                        <input type='number' name='Idade' id='Idade' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Peso'>Peso:</label>
                        <input type='number' name='Peso' id='Peso' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Status'>Status do paciente:</label>
                        <input type='text' name='Status' id='Status' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Custo'>Custo do tratamento:</label>
                        <input type='number' name='Custo' id='Custo' className='caixas' required></input>
                    </div>
                </div>
                <div>
                    <div className='alinhamentocad'>
                        <label for='NomeCli'>Nome do dono:</label>
                        <input type='text' name='Custo' id='Nome' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Email'>Email:</label>
                        <input type='email' name='Custo' id='Email' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='Endereço'>Endereço:</label>
                        <input type='text' name='Custo' id='Endereço' className='caixas' required></input>
                    </div>
                    <div className='alinhamentocad'>
                        <label for='TEL'>Telefone de contato:</label>
                        <input type='tel' name='Custo' id='Telefone' className='caixas' required></input>
                    </div>
                    <input type='submit' name='Envio' className='envio'></input>
                </div>
            </form>
            <img src={ImgCad} className='img' height={700} alt="Cachorro"></img>

        </React.Fragment>
    )
}