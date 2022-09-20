import React from 'react'
import ImgCad from './cad.jpg'
import EstCad from './styles/cadastro.css'

export default function Register(){
    return(
        <React.Fragment>
            <form className='formulario'>
            <div> 
                <div className='cabform'>Dados do animal</div>
                <div className='alinhamentocad'>
                    <label for='Nome'>Nome</label>
                    <input type='text' name='Nome' id='Nome' className='caixas'></input>
                </div>
                <div className='alinhamentocad'>
                    <label for='Nome'>Idade</label>
                    <input type='number' name='Idade' id='Idade' className='caixas'></input>
                </div>
                <div className='alinhamentocad'>
                    <label for='Nome'>Peso</label>
                    <input type='number' name='Peso' id='Peso' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'> 
                    <label for='Nome'>Status do paciente</label>
                    <input type='text' name='Status' id='Status' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
            </div>
            <div>
                <div className='cabform'>Dados do dono</div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
                <div  className='alinhamentocad'>
                    <label for='Nome'>Custo do tratamento</label>
                    <input type='number' name='Custo' id='Custo' className='caixas'></input>
                </div>
            </div>
                <div className='botaocad'>
                    <a href="./gerencamento"><button className='botao' type='button'>Gerenciamento</button></a>
                </div>
            </form>
            <img src={ImgCad} className='img' height={566} alt="Cachorro"></img>
        </React.Fragment>
    )
}