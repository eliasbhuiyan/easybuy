import axios from 'axios'
import React from 'react'

const AddtoCartButton = ({product}) => {
    const handelAdd = () => {
        console.log(product);
        // axios.post('http://localhost:8000/cart/addtocart', {
            
        // })
    }
  return (
    <button onClick={handelAdd} className="btn">Add To Cart</button>
  )
}

export default AddtoCartButton