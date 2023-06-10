import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Manufacturer from "../Pages/Manufacturer/Manufacturer";
import Transporter from "../Pages/Transporter/Transporter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/manufacturer',
                element: <Manufacturer></Manufacturer>
            },
            {
                path: '/transporter',
                element: <Transporter></Transporter>
            },
        ]
    }
]);

export default router;