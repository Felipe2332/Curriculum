import { createBrowserRouter } from "react-router-dom";
import Home from 'pages/Home/Home'
import Contato from "pages/contato/contato";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },

]);

export default routes
