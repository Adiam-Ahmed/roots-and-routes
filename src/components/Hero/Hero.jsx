import './Hero.scss'
import HeroImg from '../../assets/HeroImg.png'
import CTAButton from "../UI/CTAButton/CTAButton";
import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Start Your Journey Now.</h1>
                <h3 className="hero__subtitle">We’re here to help you settle in, connect, and thrive in your new life.</h3>
                <CTAButton
                    className={`header`}
                    text="Get Started"
                    type="primary"
                // onClick={}
                />
                <img
                    src={HeroImg}
                    alt='The word hello written in different languages'
                    className='hero__img'
                />
            </div>
        </section>
    )
}

export default Hero