import React from 'react'
import './Loginoptions.scss'


//components
import Button from '../Button/Button';

//router
import { Link } from 'react-router-dom';

//assets
import facebook_logo from '../../assets/icon_facebook.svg'
import google_logo from '../../assets/icon_google.svg'
import mail_logo from '../../assets/icon_mail.svg'



function Loginoptions() {
    return (
        <div className="loginoptions">
            <div >
                <p>Entrar com:</p>
                <Link to="#"><Button logo={facebook_logo} name="Facebook"/></Link> 
                <Link to="#">  <Button logo={google_logo} name="Google"/></Link> 
                <Link to="/login"><Button logo={mail_logo} name="E-mail"></Button></Link> 
                <p>Entrar sem email</p>
                <p id="terms">Ao prosseguir você aceita nossos Termos e condições e Política de Privacidade</p>
            </div>
        </div>


    )
}

export default Loginoptions;