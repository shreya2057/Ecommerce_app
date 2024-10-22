import { useRoutes } from "react-router-dom";
import { useIsAuthenticated } from "../hooks/useIsAuthencated";
import HomeScreen from "../screen/Home";
import Carts from "../screen/items/Cart";
import { ItemDetail } from "../screen/items/ItemDetail";
import Orders from "../screen/items/Orders";
import Shopping from "../screen/items/Shopping";
import Login from "../screen/users/Login";
import SignUp from "../screen/users/Signup";
import { ROUTES } from "./routes";
import Layout from "../components/Layout";
import Verification from "../screen/users/Verification";
import EmailVerify from "../screen/users/EmailVerify";

const privateRoutes = [
  {
    path: ROUTES.CARTS,
    element: (
      <Layout>
        <Carts />
      </Layout>
    ),
  },
  {
    path: ROUTES.ORDERS,
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
  },
];

const publicRoutes = [
  {
    path: ROUTES.LANDING,
    element: (
      <Layout>
        <HomeScreen />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCTS,
    element: (
      <Layout>
        <Shopping />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: (
      <Layout>
        <ItemDetail />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <HomeScreen />
      </Layout>
    ),
  },
];

const authRoutes = [
  {
    path: ROUTES.LOGIN,
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: ROUTES.SIGNUP,
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: ROUTES.VERIFICATION,
    element: (
      <Layout>
        <Verification />
      </Layout>
    ),
  },
  {
    path: ROUTES.EMAIL_VERIFY,
    element: (
      <Layout>
        <EmailVerify />
      </Layout>
    ),
  },
];

function AppRouter() {
  const { data: isauthenticated } = useIsAuthenticated();
  const router = useRoutes(
    isauthenticated
      ? [...privateRoutes, ...publicRoutes]
      : [...publicRoutes, ...authRoutes]
  );
  return router;
}

export default AppRouter;
