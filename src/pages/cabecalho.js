import React from 'react' 
import ImgCab from './patinha.png'

export default function Cabecalho(){
    return( 
        <React.Fragment>
            <div className='topo'>
                <a href="./">
                <span className='topopre' >meu</span>pet
                <img src={ImgCab} className='imgcab' alt="Pata de cachorro"></img></a>
            </div>
        </React.Fragment>
    )
}