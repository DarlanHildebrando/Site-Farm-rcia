import React from 'react'
import './Body.css'
import Cards from './Cards'
import { Link } from 'react-router-dom'


function Body() {
  return (
    <div className='Corpo'>

      <div className='ContainerDividido'>

      <div className='MetadeComFrase'>

        <h5>Cuidando da sua saúde com confiança e carinho!</h5>

      <Link to='/SaibaMais'><button className='Button'>Saiba mais!</button></Link>

      </div>

      <div className='MetadeComLogo'>
      
      <img className='LogoGrande' src="./img/farmarcia.avif" alt="" />
      
      </div>

      

</div>


     
    </div>
  )
}

export default Body
