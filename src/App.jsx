import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home.jsx"
import Menu from "./components/Pages/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <div>
        <Menu />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
