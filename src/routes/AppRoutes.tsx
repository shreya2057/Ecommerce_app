import { Navigate, useRoutes } from "react-router-dom";
import { useIsAuthenticated } from "../hooks";
import { HomeScreen } from "../screen/home";
import { Login, Signup } from "../screen/auth";
import { ROUTES } from "./routes";
import { Layout } from "../components/layout";
import Verification from "../screen/auth/Verification";
import EmailVerify from "../screen/auth/EmailVerify";
import { Products, ProductDetail } from "@/screen/products";
import { Carts, Orders } from "@/screen/orders";

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
        <Products />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
];

const authRoutes = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />,
  },
  {
    path: ROUTES.VERIFICATION,
    element: <Verification />,
  },
  {
    path: ROUTES.EMAIL_VERIFY,
    element: <EmailVerify />,
  },
];

function AppRouter() {
  const { data: isauthenticated } = useIsAuthenticated();
  const router = useRoutes(
    isauthenticated
      ? [
          ...privateRoutes,
          ...publicRoutes,
          { path: "*", element: <Navigate to={ROUTES.LANDING} /> },
        ]
      : [...publicRoutes, ...authRoutes]
  );
  return router;
}

export default AppRouter;
