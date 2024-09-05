import './CTAButton.scss';

//className: custom class name
//text: button text
//types: primary, secondary, header, delete
//onClick: function to run when button is clicked

import React from 'react'

const CTAButton = ({className, text, type , onClick}) => {
    const buttonClass = `cta-button__${type} ${className}`
  return (
      <button className={buttonClass} onClick={onClick}>
        {text}
   </button>
  )
}

export default CTAButton