import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="h-full w-full bg-blue-300 flex flex-col justify-center items-center gap-2">
      <h3 className="text-4xl sm:text-6xl md:text-8xl font-semibold uppercase">
        XCX Mart
      </h3>
      <Link
        to="shop"
        className="p-2 sm:p-4  font-mono rounded-md bg-stone-900 text-base sm:text-2xl md:text-3xl cursor-pointer hover:bg-stone-600 transition-colors duration-300 focus:outline-2 focus:outline-amber-400"
      >
        Start Shopping
      </Link>
    </div>
  );
}
