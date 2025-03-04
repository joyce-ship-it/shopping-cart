export default function Footer() {
  return (
    <footer className="text-base sm:text-1xl md:text-2xl text-stone-900 bg-fuchsia-300 p-2 sm:p-4 md:pd-6 rounded-md font-semibold font-mono flex justify-between items-center">
      <span>Total Amount: x $</span>
      <button className="p-1 sm:p-2 md:p-2.5 text-base sm:text-1xl md:text-2xl bg-green-300 text-green-950 cursor-pointer hover:bg-green-500 transition-colors duration-300 rounded-md">
        checkout
      </button>
    </footer>
  );
}
