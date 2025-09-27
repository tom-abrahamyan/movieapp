import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./components/movies/movieDetails/MovieDetails";
import Movies from "./pages/Movies";
import About from "./pages/About";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
   
      children: [
        { index: true, element: <Home /> },
        { path: "moviedetails/:type/:id", element: <MovieDetails />},
        { path: ":type", element: <Movies />},
        { path: "about", element: <About />},
        { path: "favorites", element: <Favorites />}
      ],
    },
  ])

  return (
    <div className="w-[90%] min-h-dvh flex flex-col justify-between items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
