import AuthLayout from "./pages/auth";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    auth: true,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });
export default authCheck(routes);
