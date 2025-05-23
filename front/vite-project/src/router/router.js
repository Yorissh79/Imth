import {createBrowserRouter} from "react-router";
import Home from "../pages/home/Home.jsx";
import Layout from "../components/layout/Layout.jsx";
import Notfound from "../pages/notfound/Notfound.jsx";
import Otherlayout from "../components/otherlayout/Otherlayout.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import Detail from "../components/detail/Detail.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home,
            }
        ]
    },
    {
        path: '/admin',
        Component: Otherlayout,
        children: [
            {
                path: "/admin",
                Component: Admin,
            }
        ]
    },
    {
        path: '/basket',
        Component: Otherlayout,
        children: [
            {
                path: "/basket",
                Component: Basket,
            }
        ]
    },
    {
        path: '/wishlist',
        Component: Otherlayout,
        children: [
            {
                path: "/wishlist",
                Component: Wishlist,
            }
        ]
    },
    {
        path: '/item',
        Component: Detail,
    },
    {
        path: '*',
        Component: Notfound,
    }
])