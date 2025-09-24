import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

function Hero() {
  return (
    <section className="section-hero">
        <div className="hero">
            <div className="hero-text-box">   
                <h1 className="hero-heading">This website is awesome</h1>
                <p className="hero-text">This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.</p>
                <button className="hero-button">Sign Up</button>
            </div>
            <div className="hero-image">
                <img class="hero-image" src={HeroImage} alt="Illustration with ice creams" />
            </div>
        </div>
    </section>
  )
}

export default Hero