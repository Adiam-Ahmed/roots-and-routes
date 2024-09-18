import React, { useState } from 'react';
import './Testimonials.scss';
import { Card, CardContent, Typography, Box, CardActionArea } from '@mui/material';

const testimonialsData = [
    {
        name: 'Maria Gomez',
        country: 'Mexican Immigrant',
        message: 'When I arrived in Canada, I felt lost. I didn’t know where to start, how to connect with local services, or find a community. Everything felt overwhelming, and I wished there was a guide for people like me.',
    },
    {
        name: 'Ali Al-Mansoori',
        country: 'Syrian Refugee',
        message: 'Starting over in a new country was a challenge. Finding resources and understanding how to navigate the system was confusing. I needed a resource to guide me through the process and help me build a new life here.',
    },
    {
        name: 'Amina Khatib',
        country: 'Somali Immigrant',
        message: 'The transition to a new country was more difficult than I expected. I struggled to find community support and essential services. I wished for a clear guide to help me settle and integrate into Canadian society.',
    },
];

const Testimonials = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardIndex) => {
        setActiveCard(cardIndex);
    };

    return (
        <>
            <div className="testimonial">
                <h1 className="testimonial__title">Newcomer Experiences.</h1>
                <h3 className="testimonial__subtitle">Real stories from those who have faced the journey of starting anew in Canada.</h3>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '80vh',
                        position: 'relative',
                    }}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <CardActionArea
                            key={index}
                            onClick={() => handleCardClick(index)}
                            sx={{
                                width: 500,
                                height: 300,
                                position: 'absolute',
                                zIndex: activeCard === index ? 4 : index + 1,
                                transform: `translate(${(index + 1) * 20}px, ${(index + 1) * 20}px)`,
                                boxShadow: activeCard === index ? 9 : 3 * (index + 1),
                            }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: activeCard === index
                                        ? '#ffecb3' // Color for active card
                                        : index % 2 === 0
                                            ? '#f0f4c3' // Alternate color for even inactive cards
                                            : '#e3f2fd', // Alternate color for odd inactive cards
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5">
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {testimonial.country}
                                    </Typography>
                                    <Typography variant="body2">
                                        {testimonial.message}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    ))}
                </Box>
            </div>
        </>
    );
};

export default Testimonials;
