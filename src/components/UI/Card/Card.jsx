import React from 'react'
import './Card.scss'

const Card = ({ image, text }) => {
  return (
      <div className="card">
          <img src={image} alt="Card" className="card__image" />
          <div className="card__overlay">
              <p className="card__text">{text}</p>
          </div>
      </div>
  )
}

export default Card