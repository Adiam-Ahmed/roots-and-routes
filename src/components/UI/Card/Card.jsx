import React from 'react'
import './Card.scss'

const Card = ({ image, text, paragraph }) => {
  return (
      <div className="card">
          <img src={image} alt="Card" className="card__image" />
          <div className="card__overlay">
              <h3 className="card__text">{text}</h3>
              <p className="card__paragraph"> {paragraph}</p>
          </div>
      </div>
  )
}

export default Card