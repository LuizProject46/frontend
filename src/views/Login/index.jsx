import React from 'react'
import style from './style.module.css'
import logo from '../../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Login(){


    return(
       <div className={style.container}>
            
            <div className={style.card__wrapper}>
                <div>
                    <img height="300" width="300" src={logo} alt="Band"/>
                </div>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="E-mail"/>
                <button>Entrar</button>
                <div className={style.facebook__signin}>
                    <div></div>
                    <label>OU</label>
                    <div></div>
                    
                </div>
                <Link className={style.link__signup} to="/signup">Crie uma conta</Link>
                {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
            </div>
           
       </div>
    )
}