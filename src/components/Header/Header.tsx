import React from 'react'
import './Header.scss'

//assets
import Logo from '../../assets/logo.svg'


function Header() {
    return (
        <div className="header-top">
            <div className="logo-fly">
              <img src={Logo} alt=""/>
            </div>       
          <div className="header-info">
              <h2>
                Economize em sua viagem
              </h2>
              <p>
                Faça login para aproveitar os decontos e as ofertas imperdíveis para uma viagem sensacional rumo ao seu destino dos sonhos!!
              </p>
          </div>
          
        </div>

    )
}

export default Header;