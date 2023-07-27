import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./elements/Navbar/Navbar";
import { Footer } from "./elements/Footer/Footer";
import { Home } from "./elements/Home/Home";
import { About } from "./elements/About/About";
import { Plan } from "./elements/Plan/Plan";
import ScrollToTop from "./ScrollToTop";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/plan", element: <Plan /> },
    ],
  },
  {
    element: <Footer />,
  },
]);

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
