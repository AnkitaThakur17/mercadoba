import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadphones, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Section = () => {
  return (
 <div className="end-section">
      <div className="end-section1">
        <FontAwesomeIcon icon={faTruck} style={{ color: "#B197FC",fontSize: '32px'  }} />
     <h3>Shipments With The Best Prices To All Provinces</h3>
      </div>
      <div className="end-section1">
        <FontAwesomeIcon icon={faHeadphones} style={{ color: "#B197FC" ,fontSize: '32px'  }} />
        <h3>24/7 Customer Service</h3>
        <p>Online top support<br/>
           +1 561 9875465<br/>
           abc@gmail.com
           </p>
      </div>
      <div className="end-section1">
        <FontAwesomeIcon icon={faCreditCard} style={{ color: "#B197FC",fontSize: '32px' }} />
        <h3>Secure Payment</h3>
        <p>100% secure payment</p>
      </div>
    </div>
  )
}

export default Section
