import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, HomePage } from "./pages";
import { routes } from "./router";
import { withAuthentication } from "./util";
import QuotePage from './pages/quote/page/index';

const router = createBrowserRouter([
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.quote,
        element: <QuotePage/>,
        loader: withAuthentication,
      }
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
