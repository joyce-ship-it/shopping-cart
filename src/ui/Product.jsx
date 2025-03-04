export default function Product(props) {
  let quantity = 0;
  const cartItem = props.cart.filter(
    (item) => item.id === props.productData.id
  );
  if (cartItem.length > 0) {
    quantity = cartItem[0].quantity;
  }
  return (
    <div className="h-[22rem] w-[18rem] sm:w-[20rem] text-stone-400 border-2 p-2 text-base flex flex-col justify-between ">
      <img
        className="h-[60%] w-[100%] object-cover"
        src={props.productData.image}
        alt={props.productData.description}
      />
      <h3>{props.productData.title}</h3>
      <h3>{props.productData.price}$</h3>
      {quantity === 0 && (
        <button
          onClick={() => props.handleAddToCart(props.productData)}
          className="p-2 bg-green-500 text-green-900 rounded-md hover:bg-green-700 transition-colors duration-300 cursor-pointer"
        >
          Add to cart
        </button>
      )}

      {quantity > 0 && (
        <div className="flex w-full">
          <button
            onClick={() => props.handleAddToCart(props.productData, true)}
            className="flex-1 bg-red-500 text-amber-100 hover:cursor-pointer"
          >
            ➖
          </button>
          <span className="flex-2 flex justify-center bg-stone-700">
            {quantity}
          </span>
          <button
            onClick={() => props.handleAddToCart(props.productData)}
            className="flex-1 bg-green-500 text-amber-100 hover:cursor-pointer"
          >
            ➕
          </button>
        </div>
      )}
    </div>
  );
}
