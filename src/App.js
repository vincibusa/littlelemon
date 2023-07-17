import React, { useState } from 'react';
import Barra from './components/Barra';
import Intro from './components/Intro';
import Menu from './components/Menu';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <Barra cartItems={cartItems} setCartItems={setCartItems} />
      <div className="Primo">
        <Intro />
      </div>
      <Menu handleAddToCart={handleAddToCart} />

      
    </>
  );
}

export default App;



