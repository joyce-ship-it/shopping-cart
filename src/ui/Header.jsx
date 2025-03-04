import { Link } from "react-router-dom";
export default function Header({ totalItems }) {
  return (
    <header className="text-base sm:text-1xl md:text-2xl text-stone-900 bg-fuchsia-300 p-2 sm:p-4 md:pd-6 rounded-md font-semibold flex justify-between">
      <span>XCX Shop</span>
      <div className="space-x-1.5 sm:space-x-2 md:space-x-2.5">
        <Link
          to="/"
          className="hover:text-fuchsia-800 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="shop"
          className="hover:text-fuchsia-800 transition-colors duration-300"
        >
          Shop
        </Link>
        <Link>🛒- {totalItems}</Link>
      </div>
    </header>
  );
}
