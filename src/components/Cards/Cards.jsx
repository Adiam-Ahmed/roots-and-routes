import React from 'react'
import Card from '../UI/Card/Card'
import './Cards.scss'
const Cards = () => {
    const cardData = [
        { image: 'https://via.placeholder.com/300x200', text: 'Support Integration' },
        { image: 'https://via.placeholder.com/300x200', text: 'Promote Community' },
        { image: 'https://via.placeholder.com/300x200', text: 'Cultural Preservation' },
    ];
    return (
        <section className="cards">
            <h2 className="cards__title">The BENFITS of Roots and Routes</h2>
            <div className="cards__item">
                {cardData.map((card, index) => (
                    <Card key={index} image={card.image} text={card.text} />
                ))}
            </div>

        </section>

    )
}

export default Cards