import { createContext, useState } from "react";

// 1. Create context
export const CartContext = createContext();

// 2. Create provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // setCart([...cart, product]);

    // Check if product already exists in cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // Product does not exist in cart
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
