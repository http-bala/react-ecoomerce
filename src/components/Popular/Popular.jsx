import React from 'react'
import './Popular.css'
import dataproduct from '../assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-item">
            {
                dataproduct.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default Popular