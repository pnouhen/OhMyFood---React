import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import "./styles/general.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/menu/:id",
    element: (
        <Menu />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
