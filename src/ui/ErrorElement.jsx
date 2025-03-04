import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h2 className="font-semibold text-1xl sm:text-2xl md:text-3xl">
        Woops! That link does not exist!
      </h2>
      <span className="font-mono text-1xl sm:text-2xl md:text-3xl">
        go back to{" "}
        <Link className="text-blue-800 hover:text-blue-600 " to="/">
          home
        </Link>
      </span>
    </div>
  );
}
