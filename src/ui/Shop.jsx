import { useEffect, useState } from "react";
import Product from "./Product";
export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  console.log(products);
  return (
    <div className="h-full w-full px-4 py-2 flex flex-wrap justify-center gap-2 sm:gap-4">
      {products?.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} productData={product}></Product>;
        })}
    </div>
  );
}
