import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Shop from "./ui/Shop.jsx";
import Checkout from "./ui/Checkout.jsx";
import ErrorElement from "./ui/ErrorElement.jsx";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
