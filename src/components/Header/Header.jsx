import React from 'react';
import { supabase } from '../../supabaseClient';
import './Header.scss';
import Logo from '../../assets/Logo.png';
import CTAButton from '../UI/CTAButton/CTAButton';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

const Header = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const handleSignIn = () => {
        navigate('/login');
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
                {user ? (
                    <CTAButton
                        className='header-btn'
                        text="Log Out"
                        type="header-btn"
                        onClick={handleLogout}
                    />
                ) : (
                    <CTAButton
                        className='header-btn'
                        text="Sign In"
                        type="header-btn"
                        onClick={handleSignIn}
                    />
                )}
            </section>
        </header>
    );
};

export default Header;
