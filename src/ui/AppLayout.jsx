import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function AppLayout() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product, decrease = false) {
    console.log(product);
    const existingItem = cart.filter((item) => item.id === product.id);
    console.log(existingItem);
    if (existingItem.length === 0) {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          totalPrice: +product.price,
        },
      ]);
    } else {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: decrease
                  ? Math.max(item.quantity - 1, 0)
                  : item.quantity + 1,
                totalPrice: decrease
                  ? item.totalPrice - Number(item.price)
                  : item.totalPrice + Number(item.price),
              }
            : item
        );
      });
    }
  }
  console.log(cart);
  let totalAmount = 0;
  let totalItems = 0;
  cart.forEach((item) => {
    totalAmount += item.totalPrice;
    totalItems += item.quantity;
  });

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr_auto]">
      <Header totalItems={totalItems}></Header>
      <main className="overflow-scroll">
        <Outlet context={{ cart, handleAddToCart }}></Outlet>
      </main>
      {totalAmount > 0 && <Footer totalAmount={totalAmount}></Footer>}
    </div>
  );
}
