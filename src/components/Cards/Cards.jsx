import React from 'react'
import Card from '../UI/Card/Card'
import './Cards.scss'
import Support from '../../assets/support.jpg'
import Culture from '../../assets/CultureandCommunity.jpg'
import PromoteCommunity from '../../assets/PromoteCommunity.jpg'



const Cards = () => {
    const cardData = [
        { image: Support, text: 'You Belong Here', paragraph : 'The process of blending diverse individuals into a unified whole, where each person’s unique contributions enhance the collective stength and cohesion of the group ' },
        {
            image: Culture , text: 'Promote Community', paragraph : 'The thread that binds individuals together ,creating a shared sense of belonging and collective strength through mutual support and common purpose' },
        {
            image: PromoteCommunity, text: 'Cultural Preservation', paragraph: ' Stay Connected to your roots by keeping the essence of your heritage alive for future generations, ensuring that your history and identity remains vibrant and relevant ' },
    ];
    return (
        <section className="cards">
            <h2 className="cards__title">The UPSIDES of Roots and Routes</h2>
            <div className="cards__item">
                {cardData.map((card, index) => (
                    <Card key={index} image={card.image} text={card.text} paragraph = {card.paragraph}/>
                ))}
            </div>

        </section>

    )
}

export default Cards