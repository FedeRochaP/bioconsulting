import React from 'react'
import style from './Nav.module.css'

// Images
import Logo from '../../assets/images/logo.png'

export default function Nav() {
     return (
          <div className={style.header}>
               <div className={style.header__logo}>
                    <img src={Logo} alt="" />
               </div>
               <div className={style.header__container}>
                    <nav className={style.header__nav}>
                         <ul>
                              <li>Home</li>
                              <li>About us</li>
                              <li>Projects</li>
                              <li>Newsletter</li>
                              <li>Contact</li>
                         </ul>
                    </nav>
                    <select name="" id="">
                         <option value="">Español</option>
                         <option value="">English</option>
                    </select>
               </div>
          </div>
     )
}
