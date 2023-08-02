import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Dwelling from "./pages/Dwelling";
import "./styles/normalize.css";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";

const basename = `${process.env.PUBLIC_URL}/Kasa`

const router = createBrowserRouter([
  {
    path: "/kasa",
    element: <Home />,
  },
  {
    path: "kasa/about",
    element: <About />,
  },
  {
    path: "kasa/dwelling/:id",
    element: <Dwelling />,
  },
  {
    path: "kasa/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="kasa/error" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} basename={basename} />
  </StrictMode>
);

reportWebVitals(console.log);
