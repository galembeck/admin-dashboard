import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu";

export function App() {
  const Layout = () => {
    return (
      <div className="main bg-main-background text-white">
        <Navbar />
        <div className="container flex">
          <div className="menu-container w-[250px] py-[5px] px-[20px] border-r-[2px] border-solid border-soft-background">
            <Menu />
          </div>
          <div className="content-container py-[5px] px-[20px]">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}