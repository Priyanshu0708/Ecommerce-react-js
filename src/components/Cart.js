import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Button, ListGroup, ListGroupItem, Row, Col,Image,Form} from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc, crr) => acc + Number(crr.price) * crr.qty, 0));
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem key={prod.id}>
              
              <Row>
              <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>{prod.price}</Col>
                <Col md={2}><Rating rating={prod.ratings} /></Col>
                <Col md={2}>
                <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",  
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control></Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_TO_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                  </Col>
              </Row>
              
              
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className="title">Subtotal ({cart.length}) items </span>
        <span>Total ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
