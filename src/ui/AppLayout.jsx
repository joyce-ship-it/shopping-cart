import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr_auto]">
      <Header></Header>
      <main className="overflow-scroll">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
