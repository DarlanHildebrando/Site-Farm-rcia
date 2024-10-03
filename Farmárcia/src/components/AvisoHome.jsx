import React from 'react'
import './AvisoHome.css'

function AvisoHome() {
  return (
    <div className='ContainerAviso'>
      <div className='Aviso'>

      É com imensa alegria que convidamos você  <br />para a inauguração da nossa nova farmácia! <br /> 
      Venha conhecer nosso espaço, que está <br /> preparado para oferecer o melhor em saúde <br />e bem-estar.

      </div>

      <div className='placa'>

        <img className='PlacaImg' src="./img/farmarcia-placa.avif" alt="" />

        <div className='InfoLoc'>Endereço: <br />Rua Agostinho Carrara <br />666</div>



      </div>

    </div>
  )
}

export default AvisoHome
