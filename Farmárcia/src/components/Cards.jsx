import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div className='Container'>

        <div className='BordaCard'>

            <img className='ImgFarm' src="./img/farmarcia-camisetas.avif" alt="" />

            <div className='InfoProduto'>

             Camisetas Farmárcia

            </div>


        </div>

        <div className='BordaCard'>

            <img className='ImgFarm' src="./img/farmarcia-placa.avif" alt="" />

            <div className='InfoProduto'>

             Placa Farmárcia

             <br /><br />

             Endereço: Rua Agostinho Carrara 666

            </div>


        </div>
      

</div>

  )
}

export default Cards
