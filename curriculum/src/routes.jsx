import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Contato from "./pages/contato/contato";
import NavigationBar from "./components/navigationBar/navigationBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <>
    <NavigationBar/>
    <Home />,
    </>
  },
  {
    path: "/contato",
    element: <>
    <NavigationBar/>
    <Contato />,
    </>
  },

]);

export default routes
