import React from 'react'
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import { Outlet } from "react-router-dom"
import Overview from '../../components/Overview/Overview.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProblemSolution from '../../components/ProblemSolution/ProblemSolution.jsx'
import WhyUs from '../../components/WhyUs/WhyUs.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Hero />
            <Overview />
            <Cards />
            <ProblemSolution />
            <Testimonials  />
            <WhyUs />
            <Footer />
        </>

    )
}

export default LandingPage