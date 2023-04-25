import React from 'react'

// Styles
import style from './Footer.module.css'

// Images
import LogoCompleto from '../../assets/images/LogoCompleto.svg'

export default function Footer() {
  return (
    <div className={style.footer}>
      <img src={LogoCompleto} alt="" />
      <div className={style.footer__container}>
        <div className={style.footer__data}>
          <div className={style.footer__icons}>
            <div className={style.footer__icon}>
              <i class="fa-solid fa-phone"></i>
              <p>Telephone number: +4531720173</p>
            </div>
            <div className={style.footer__icon}>
              <i class="fa-solid fa-phone"></i>
              <p>Fax: +4531720173</p>
            </div>
          </div>
          <div className={style.footer__icons}>
            <div className={style.footer__icon}>
              <i class="fa-solid fa-location-dot"></i>
              <p>Headquarters - Denmark - Odense</p>
            </div>
            <div className={style.footer__icon}>
              <i class="fa-solid fa-location-dot"></i>
              <p>Office - Denmark - Copenhagen</p>
            </div>
            <div className={style.footer__icon}>
              <i class="fa-solid fa-location-dot"></i>
              <p>Office - Costa Rica - Alajuela</p>
            </div>
          </div>
          <div className={style.footer__icons}>
            <div className={style.footer__icon}>
              <i class="fa-regular fa-envelope"></i>
              <p>Contact: bioconsulting@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={style.footer__sm}>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}
