import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home.jsx"
import Menu from "./components/Pages/Menu.jsx";
import "./styles/body.scss"

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
