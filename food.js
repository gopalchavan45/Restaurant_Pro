import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import FunUser from "./src/components/FunUser";
import RestaurantMeanu from "./src/components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//Some buddy exported react ,reactDOM that why we importing this things

const App = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    future: {
      v7_startTransition: true,
    },
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMeanu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("foody"));
root.render(<RouterProvider router={AppRouter} />);
