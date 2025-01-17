import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 15, quantity: 2 },
    { id: 3, name: "Item 3", price: 20, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(newQuantity, 0) } 
          : item
      )
    );
  };

  const calculateTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - ${item.price} x{" "}
            </span>
            <input
              type="number"
              min="0"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <h2>Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
