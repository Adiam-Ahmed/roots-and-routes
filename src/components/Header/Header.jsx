import React from 'react'
import './Header.scss'
import Logo from '../../assets/Logo.png'
import CTAButton from "../UI/CTAButton/CTAButton";
import { useNavigate,  Link } from "react-router-dom";




const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route);
    };
    
    return (
        <header className='header'>
            <section className='header__container'>
                <section className='header__logo-container'>
                    <Link to='/'>
                        <img
                            src={Logo}
                            alt='root and routes logo'
                            className='header__logo-img'
                        />
                    </Link>
                </section>
                <CTAButton
                    className='header-btn'
                    text="Sign In"
                    type="header-btn"
                    onClick={() => handleNavigate("/login")}
                />

            </section>
        </header>

    )
}

export default Header