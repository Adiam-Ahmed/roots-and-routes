import React from 'react'
import Logo from '../../assets/Logo.png'
import './Header.scss'
import CTAButton from "../UI/CTAButton/CTAButton";

const Header = () => {
    return (
        <header className='header'>
            <section className='header__container'>
                <section className='header__logo-container'>
                    <img
                        src={Logo}
                        alt='root and routes logo'
                        className='header__logo-img'
                    />
                    <h2 className='header__logo'>Roots & Routes</h2>
                </section>
                <CTAButton
                    className={`header__nav--button`}
                    text="Sign In"
                    type="header"
                // onClick={}
                />

            </section>
        </header>
    )
}

export default Header