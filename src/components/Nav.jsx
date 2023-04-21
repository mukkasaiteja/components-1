import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='navbar'>
        <section className='Logo'>Logo</section>
        <section className='nav-iteams'>
            <section className='forhover home'>Home</section>
            <section className='forhover'>About</section>
            <section className='forhover'>Contact</section>
        </section>
        <section className="icone">
        <i class="fa-brands fa-facebook-f fa-xl" ></i>
        <i class="fa-brands fa-twitter fa-xl"></i>
        <i class="fa-brands fa-instagram fa-xl"></i>
        </section>
    </div>
  )
}

export default Nav