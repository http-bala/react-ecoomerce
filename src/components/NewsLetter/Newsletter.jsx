import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive offer On Your Email</h1>
        <p>Subscribe to our Newsletter and Stay updated </p>
        <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>    
        </div>
    </div>
  )
}

export default Newsletter