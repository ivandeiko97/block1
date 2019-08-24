import React from 'react'
import Lease from './Lease';

export default function SectionRightBanner() {
  return (
    <section className="banner-section__right">
      <div className="description">
        <h1 className="description-h1">2019 Q5</h1>
        <div className="description-specifications">
          <p>2 QT Quattro</p>
          <p>Premium</p>
        </div>    
      </div>
      <div className="leases-information">
        <Lease 
          headerText="Everyone Qualifies"
          price="499"
          priceText=" 39 Mo. Lease"
          signingText="$3,500 Due at Signing | $0 Security Deposit"
        />
        <Lease 
          headerText="Current Audi Owners"
          price="479"
          priceText=" Mo. Lease"
          signingText="$3,500 Due at Signing"
        />
      </div>
      <hr className="banner-hr"/>
      <div className="banner-offer">
        <p className="banner-offerText">MSRP: $47,450. 10K mi/yr. lease excludes tax, title, and plate free. For qualified customers though</p>
        <p className="banner-offerText">Audi Financial Services. Vehicle image shown for illustrative purposes only. #WC2776. Offer ends 09/03/19.</p>
      </div>
    </section>
  )
}
