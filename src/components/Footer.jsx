import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/Library.svg'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className="footer__logo">
                        <img className='footer__logo--img' src={FooterLogo} alt="" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <a className='footer__link' href="/">Home</a>
                    <span className='footer__link no-cursor' href="/">About</span>
                    <a className='footer__link' href="/books">Books</a>
                    <a className='footer__link' href="/cart">Cart</a>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Library
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer