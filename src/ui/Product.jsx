export default function Product(props) {
  function handleClick() {
    console.log(props.productData);
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
      <button
        onClick={handleClick}
        className="p-2 bg-green-500 text-green-900 rounded-md hover:bg-green-700 transition-colors duration-300 cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
}
