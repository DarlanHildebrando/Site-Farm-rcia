import React from 'react'
import LogoHeader from './LogoHeader'
import BarraPesquisa from './BarraPesquisa'

import './Header.css'

function Header() {
  return (
    <header>
    <LogoHeader/>

     <BarraPesquisa/>

      <div className='ContainerInfos'>

        <button className='Infos'>Entrar</button>
        <button className='Infos'>Cadastrar-se</button>

      </div>

      

    </header>
  )
}

export default Header
