import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";
import useAuthStore from "./pages/login/store";
// const { user, login } = useAuthStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

export default router;
