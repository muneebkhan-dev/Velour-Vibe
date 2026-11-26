import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
 const addToCart = (product) => {
  const quantityToAdd = product.quantity || 1;

  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      return prevCart.map((item) => {
        if (item.id !== product.id) return item;

        const maxStock = item.stock ?? Infinity;g
        const FinalQty = Math.min(item.quantity + quantityToAdd, maxStock);
        return { ...item, quantity: FinalQty };
      });
    }

    return [...prevCart, { ...product, quantity: quantityToAdd }];
  });
};
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const handleIncrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id !== productId) return item
        const maxStock = item.stock ?? Infinity
        if (item.quantity >= maxStock) return item
        return { ...item, quantity: item.quantity + 1 }
      }),
    )
  }

  const handleDecrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id !== productId) return item
        if (item.quantity <= 1) return item
        return { ...item, quantity: item.quantity - 1 }
      }),
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleIncrease, handleDecrease }}>
      {children}
    </CartContext.Provider>
  )
}
