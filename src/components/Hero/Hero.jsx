import './Hero.scss'
import HeroImg from '../../assets/HeroImg.png'
import CTAButton from "../UI/CTAButton/CTAButton";
import React from 'react'
import { useNavigate} from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()

    const handleNavigate = (route)=>{
        navigate(route)
    }

    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Rooted in Community, Routed to Success.</h1>
                <h3 className="hero__subtitle">We’re here to help you settle in, connect, and thrive in your new life.</h3>
                <CTAButton
                    className={`header`}
                    text="JOIN NOW"
                    type="primary"
                    onClick={() => handleNavigate("/signup")}
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