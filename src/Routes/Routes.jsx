import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlogPage/SingleBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/blog/:category/:id',
            element: <SingleBlog />
        }
      ]
    },
  ]);

export default router;