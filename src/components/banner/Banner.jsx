import React from 'react'
import SectionRightBanner from './SectionRightBanner';
import './style/Banner.css';
import img from './images/car.png';

export default function Banner() {
  return (
    <section className="block1">
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-car">
            <img src={img} alt="car"/>
          </div>
          <SectionRightBanner />
        </div>
      </div>      
    </section>
  )
}
