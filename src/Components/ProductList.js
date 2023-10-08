
import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <div>
      <h1 style={{ color: "dark" }}>No Products Exist in the Cart</h1>
      <h4 style={{color:"Highlight"}}>
        <b> So please add products to the cart.</b>
      </h4>
    </div>
  );
  
}