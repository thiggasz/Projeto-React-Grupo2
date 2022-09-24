import React from 'react'
import ImgLogo from './logo.png'

export default function Login(){
    return(
        <React.Fragment>
            <div className='header'>
                <img src={ImgLogo} className='img-logo' height={100} alt="meupet logo"></img>
                <div className='buttons'>
                    <div className='button'><a href="./login">Entrar</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}