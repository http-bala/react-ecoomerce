import React from 'react'
import './Items.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="itme-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item