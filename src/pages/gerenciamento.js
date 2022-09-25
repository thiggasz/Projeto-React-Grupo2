import React from 'react';
import ImgLogo from './logo.png';
import './styles/gerenciamento.css';

export default function Management() {
    return (
        <React.Fragment>
            <div className='header'>
                <img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img>

                <div className='buttons'>
                    <div className='button'><a href="/cadastro">Nova Consulta</a></div>
                </div>
            </div>
            <div className='body'>
                <h1 className='consulta-title'>Pacientes do dia</h1>
                <div className='consultas'>

                    <div id='card-1' className='card-consulta'>
                        <h1><span id='hora'>09:00</span> - <span id='racas'>Poodle</span></h1>
                        <h2><span id='nome-pet'>Belinha</span> - <span id='idade'>2 anos</span></h2>
                        <p><b>Status:</b> <span id='status'> Cinomose</span></p>
                        <button className='vermais-btn'>Ver mais</button>
                    </div>
                    <div id='card-2' className='card-consulta'>
                        <h1><span id='hora'>11:00</span> - <span id='racas'>Maltês</span></h1>
                        <h2><span id='nome-pet'>Carlinhos</span> - <span id='idade'>5 anos</span></h2>
                        <p><b>Status: </b><span id='status'> Check Up</span></p>
                        <button className='vermais-btn'>Ver mais</button>
                    </div>

                    <div id='card-3' className='card-consulta'>
                        <h1><span id='hora'>15:30</span> - <span id='racas'>Pinscher</span></h1>
                        <h2><span id='nome-pet'>Shelby</span> - <span id='idade'>1 ano</span></h2>
                        <p><b>Status:</b> <span id='status'> Ansiedade canina</span></p>
                        <button className='vermais-btn'>Ver mais</button>
                    </div>
                    <div id='card-4' className='card-consulta'>
                        <h1><span id='hora'>17:00</span> - <span id='racas'>Calopsita</span></h1>
                        <h2><span id='nome-pet'>Greta</span> - <span id='idade'>8 meses</span></h2>
                        <p><b>Status: </b><span id='status'> Pata quebrada</span></p>
                        <button className='vermais-btn'>Ver mais</button>
                    </div>

                </div>
                <h1 className='consulta-title'>Financeiro</h1>
                <div className='financeiro'>
                    
                </div>

            </div>



        </React.Fragment>
    )
}