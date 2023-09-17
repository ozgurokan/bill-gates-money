import React from 'react'

function Product({name,price,amount,imgLink}) {
    // "product_id": 1,
  //"product_name": "Big Mac",
  //"product_price": 2,
  //"amount": 0,
  //"img": "https://neal.fun/spend/images/big-mac.jpg"
  return (
    <div className='product'>
          <img src={imgLink} alt={name} />
          <div className='name'>{name}</div>
          <div className='cost'>${price}</div>
          <div className="controller">
            <button className='sell'>Sell</button>
            <input type="number" className='input' value={amount}/>
            <button className='buy'>Buy</button>
          </div>
    </div>
  )
}

export default Product