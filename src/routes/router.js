import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact";
import ErrorPage from "../pages/error";
import Root from "../pages/root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contacts/:id',
                element: <Contact />
            }
        ]
    },

]); 