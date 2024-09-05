import React from 'react'
import './Overview.scss'
import overview from '../../assets/overview.png'

const Overview = () => {
    return (
        <section className="overview">
            <div className="overview__content">
                <p className="overview__subtitle">Our platform is designed to support newcomers like you by offering information and tools based on your country of origin. Whether you need guidance on finding a job, navigating the healthcare system, or connecting with your community, we’re here to help you bridge the gap between your homeland and your new life in Canada. Let us guide you every step of the way, making your transition smoother and helping you feel at home in your new country.</p>
                <img
                    src={overview}
                    alt='The word hello written in different languages'
                    className='overview__img'
                />
            </div>
        </section>
    )
}

export default Overview