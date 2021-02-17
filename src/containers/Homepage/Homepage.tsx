import React from 'react'
import './Homepage.scss'

//components
import Header from '../../components/Header/Header'
import Loginoptions from '../../components/Login-Options/Loginoptions'

function Homepage() {
    return (
        <div className="homepage">
          <Header/>
          <Loginoptions/>          
        </div>

    )
}
export default Homepage;