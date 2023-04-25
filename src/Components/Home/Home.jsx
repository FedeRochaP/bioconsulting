import React from 'react'

// Styles
import style from './Home.module.css'

// Images
import Hero from '../../assets/images/hero.svg'

export default function Home() {
  return (
    <div className={style.home}>
     <div className={style.home__hero}>
          <img src={Hero} alt="" />
          <div className={style.home__hero_text}>
               <h2>BIO CONSULTING</h2>
               <h3>Having problems with troubleshooting biological and environmental issues? Let us help you make the world better!</h3>
               <h3>- Let’s make the world better together.</h3>
          </div>
     </div>
     <div>
          
     </div>
    </div>
  )
}
