import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <div className="products">
      <Card style={{ marginBottom: 15, width: 300 }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title style={{ paddingBottom: 10 }}>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>₹ {prod.price}/-</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ?  ( <Button onClick={()=> dispatch({
                type:"REMOVE_TO_CART",
                payload: prod,
              })}>Remove from cart</Button>
             
            ) : (
              <Button variant="danger" onClick={()=> dispatch({
                type:"ADD_TO_CART",
                payload: prod,
              })}>
                {!prod.inStock ? "Out of stock" : "Add to cart"}
              </Button>
            )
          }
         
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
