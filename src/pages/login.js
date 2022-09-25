import React, { useState } from 'react';
import './styles/login.css';
import ImgLogo from './logo.png';



export default function Login() {

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    return (
        <React.Fragment>
            <div className='container'>
                <div className='container-login'>
                    <div className='wrap-login'>
                        <form action = '/gerenciamento' className='login-form'>
                            
                            <span className='title-login'> Seja bem vindo!</span>
                            <span className='title-login'><a href='/'><img src={ImgLogo}></img></a></span>

                            <div className='wrap-input'>
                                <input className = {email !== "" ? 'has-val input' : 'input' }type='email' value={email}
                                onChange={e => setEmail(e.target.value)} required></input>
                                <span className='focus-input' data-placeholder='Email'></span>
                            </div>

                            <div className='wrap-input'>
                                <input className ={password !== "" ? 'has-val input' : 'input' }
                                type='password'
                                value={password}
                                required
                                onChange={ e => setPassword (e.target.value)}></input>
                                <span className='focus-input' data-placeholder='Password'></span>
                            </div>

                            <div className='container-login-form-btn'>
                                <button type= 'submit' className='login-form-btn'>Login 
                                </button> 
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}