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
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "dwelling/:id",
    element: <Dwelling />,
  },
  {
    path: `error`,
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} basename={basename} />
  </StrictMode>
);

reportWebVitals(console.log);
