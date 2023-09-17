import React from 'react'
import {useSelector} from "react-redux";
import Product from "./Product";


function ProductList() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className='productListWrapper'>
      <div className='productList'>
      {
        products.map((product) => {
          return <Product id={product.id} name={product.product_name} amount={product.amount} price={product.product_price} imgLink={product.img}/>
        })
      }
      </div>
    
    </div>
  )
}

export default ProductList