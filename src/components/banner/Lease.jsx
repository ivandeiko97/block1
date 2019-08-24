import React from 'react'

export default function Lease({headerText, price, priceText, signingText}) {
  return (
    <div className="lease">
      <h2 className="lease-header">{headerText}</h2>
      <p className="lease-price">
        $ <strong>{price}</strong>{priceText}
      </p>
      <p className="lease-signing">{signingText}</p>
    </div>
  )
}
