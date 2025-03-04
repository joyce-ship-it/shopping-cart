import { useOutletContext } from "react-router-dom";

export default function Checkout() {
  const { cart } = useOutletContext();
  return (
    <div className="h-full w-full p-2 bg-stone-800">
      <h2 className="text-2xl sm:text-3xl md:text-4xl">Checkout:</h2>
      {cart.map((item) => (
        <p key={item.id} className="text-base sm:text-1xl md:text-2xl ">
          {item.quantity} X {item.title}:{" "}
          <span className="font-semibold">{item.totalPrice}$</span>
        </p>
      ))}
    </div>
  );
}
