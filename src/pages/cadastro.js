import React from 'react'
import ImgCad from './images/aifolou.png'
import ImgLogo from './images/logo.png'
import './styles/cadastro.css'
import { useState } from "react"

export default function Register() {
    const [paciente, setPaciente] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [status, setStatus] = useState('');
    const [custo, setCusto] = useState('');
    const [dono, setDono] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [horario, setHorario] = useState('');

    function onChangePaciente(e) {
        setPaciente(e.target.value)
    }
    function onChangeIdade(e) {
        setIdade(e.target.value)
    }

    function onChangePeso(e) {
        setPeso(e.target.value)
    }

    function onChangeStatus(e) {
        setStatus(e.target.value)
    }

    function onChangeCusto(e) {
        setCusto(e.target.value)
    }

    function onChangeDono(e) {
        setDono(e.target.value)
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangeEndereco(e) {
        setEndereco(e.target.value)
    }

    function onChangeTelefone(e) {
        setTelefone(e.target.value)
    }

    function onChangeHorario(e) {
        setHorario(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('paciente', paciente);
        localStorage.setItem('idade', idade);
        localStorage.setItem('peso', peso);
        localStorage.setItem('status', status);
        localStorage.setItem('custo', custo);
        localStorage.setItem('dono', dono);
        localStorage.setItem('email', email);
        localStorage.setItem('endereco', endereco);
        localStorage.setItem('telefone', telefone);
        localStorage.setItem('horario', horario);
    }

 /* function getData() {
        console.log(localStorage.getItem('paciente'));
        console.log(localStorage.getItem('idade'))
        
    }  */
   
    return (
        <React.Fragment>
            <div className='header'>
                <a href="./"><img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img></a>

                <div className='buttons'>
                    <div className='button'><a href="./gerenciamento">Gerenciamento</a></div>
                </div>
            </div>

            <img src={ImgCad} className='img-cadastro' height={200}></img>

            <div className='lateral-cadastro'>

                <h1>Cadastro de Pacientes</h1>

                <form onSubmit={onSubmit} action='./gerenciamento' className='formulario'>

                    <div>
                        <div className='alinhamentocad'>
                            <label for='Nome'>Nome do paciente:</label>
                            <input type='text' value={paciente} onChange={onChangePaciente} name='Nome' id='Nome' className='caixas' required></input>
                        </div>
                        
                        <div className='alinhamentocad'>
                            <label for='Idade'>Idade:</label>
                            <input type='number' value={idade} onChange={onChangeIdade} name='Idade' id='Idade' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Peso'>Peso:</label>
                            <input type='number' value={peso} onChange={onChangePeso} name='Peso' id='Peso' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Status'>Status do paciente:</label>
                            <input type='text' value={status} onChange={onChangeStatus} name='Status' id='Status' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Custo'>Custo do tratamento:</label>
                            <input type='number' value={custo} onChange={onChangeCusto} name='Custo' id='Custo' className='caixas' required></input>
                        </div>
                    </div>
                    <div>
                        <div className='alinhamentocad'>
                            <label for='NomeCli'>Nome do dono:</label>
                            <input type='text' value={dono} onChange={onChangeDono} name='Nome' id='Nome' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Email'>Email:</label>
                            <input type='email' value={email} onChange={onChangeEmail} name='Email' id='Email' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Endereço'>Endereço:</label>
                            <input type='text' value={endereco} onChange={onChangeEndereco} name='Endereco' id='Endereço' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='TEL'>Telefone de contato:</label>
                            <input type='tel' value={telefone} onChange={onChangeTelefone} name='Telefone' id='Telefone' className='caixas' required></input>
                        </div>
                        <div className='alinhamentocad'>
                            <label for='Hora'>Horário da consulta:</label>
                            <input type='hora' value={horario} onChange={onChangeHorario} name='Horário' id='Horário' className='caixas' required></input>
                        </div>
                        <button type='submit' name='Envio' className='envio'> Submit</button>
                    </div>
                </form>
            </div>


        </React.Fragment >
    )
}

