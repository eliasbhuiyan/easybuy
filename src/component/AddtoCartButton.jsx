import axios from "axios";
import React from "react";

const AddtoCartButton = ({ product, variant, quantity }) => {
  const handelAdd = () => {
    console.log(product, variant, quantity);

    axios.post(`${}`)
  };
  return (
    <button onClick={handelAdd} className="btn">
      Add To Cart
    </button>
  );
};

export default AddtoCartButton;
