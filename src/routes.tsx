import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";
import useAuthStore from "./pages/login/store";
import MovieInfoPage from "./pages/MovieInfoPage";
import TvShowInfoPage from "./pages/TvShowInfoPage";
import MoviePage from "./pages/MoviePage";
import TvShowPage from "./pages/TvShowPage";
// const { user, login } = useAuthStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/movies", element: <MoviePage /> },
      { path: "/tvShows", element: <TvShowPage /> },

      
      {
        path: "movie/:id",
        element: <MovieInfoPage />,
      },
      {
        path: "tv/:id",
        element: <TvShowInfoPage />,
      },
    ],
  },
]);

export default router;
