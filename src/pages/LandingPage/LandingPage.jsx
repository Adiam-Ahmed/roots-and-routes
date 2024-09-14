import React from 'react'
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { Outlet } from "react-router-dom"
import Overview from '../../components/Overview/Overview';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import ProblemSolution from '../../components/ProblemSolution/ProblemSolution'
import WhyUs from '../../components/WhyUs/WhyUs';
import Testimonials from '../../components/Testimonials/Testimonials';

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