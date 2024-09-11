import React from 'react'
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { Outlet } from "react-router-dom"
import Overview from '../../components/Overview/Overview';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';


const LandingPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Hero />
            <Overview />
            <Cards />
            <Footer />
        </>

    )
}

export default LandingPage