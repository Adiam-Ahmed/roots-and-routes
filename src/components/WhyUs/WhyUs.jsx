import React from 'react'
import './WhyUs.scss'
import Grid from '@mui/material/Grid2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CTAButton from '../UI/CTAButton/CTAButton';
import { useNavigate } from "react-router-dom";


const cardData = [
    {
        title: 'Card 1',
        description: 'This is the description for card 1.',
    },
    {
        title: 'Card 2',
        description: 'This is the description for card 2.',
    },
    {
        title: 'Card 3',
        description: 'This is the description for card 3.',
    },
];

const WhyUs = () => {
    const navigate = useNavigate()

    const handleNavigate = (route) => {
        navigate(route)
    }
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">What We Offer</h1>
                <h3 className="hero__subtitle">Personalized support and resources to help you thrive in Canada.</h3>
            </div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                    padding: '20px',
                }}
            >
                <Grid container spacing={8} justifyContent="center" maxWidth="lg">
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={8} md={6} key={index}>
                            <Card sx={{ minHeight: 400, padding: 2 }}>
                                <CardContent>
                                    <Typography variant="h4" component="div" gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <section className='cta'>
                <div className="cta__content">
                    <h1 className="cta__title">Ready to Start Your Journey ?</h1>
                    <p className="cta__subtitle">Join Roots and Routes today for a personalized experience tailored just for you.</p>

                    <CTAButton
                        className={`join`}
                        text="Join Now"
                        type="join"
                        onClick={() => handleNavigate("/signup")}
                    />
                </div>

            </section>
        </section>
    )
}

export default WhyUs