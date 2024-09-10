import React from 'react'
import Hero from '../../components/Hero/Hero';
import { Outlet } from "react-router-dom"
import Overview from '../../components/Overview/Overview';
import Cards from '../../components/Cards/Cards';


const LandingPage = () => {
    return (
        <>
            <Outlet />
            <Hero />
            <Overview />
            <Cards />
        </>

    )
}

export default LandingPage