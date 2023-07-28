import React, { createContext, useContext, useReducer } from 'react'
import { cartreducer, productReducer } from './Reducer';


const Cart = createContext();
const Context = ({ children }) => {
    
   
    const products = [...Array(20)].map((_,index)=>(
        {
            id: index + 1,
            name: `Product ${index + 1}`,
            price: Math.floor(Math.random() * 1000) + 1,
            image:`https://source.unsplash.com/random/300x200?sig=${index + 1}`,
            inStock:  [0, 3, 5, 7][Math.floor(Math.random() * 4)],
            fastDelivery: Math.random() < 0.5,
            ratings: Math.floor(Math.random() * 5) + 1,
        }
    ))
    
    const [state, dispatch] = useReducer(cartreducer,{
        products: products,
        cart : []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    });
  return (
    <Cart.Provider value={{state,dispatch,productDispatch,productState}}>
       {children}
    </Cart.Provider>
  )
}

export default Context;
export const CartState = () => {
    return useContext(Cart);
  };


