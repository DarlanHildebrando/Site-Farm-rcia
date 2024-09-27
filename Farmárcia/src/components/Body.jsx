import React from 'react'
import './Body.css'
import Cards from './Cards'

function Body() {
  return (
    <div className='Corpo'>
      <h1 className='Letras'>Bem vindos à Farmárcia.</h1>
      <h4 className='Letras'>Cuidando da sua saúde com confiança e carinho!</h4>


      <br /><br /><br /><br />

      <Cards/>
     
    </div>
  )
}

export default Body
