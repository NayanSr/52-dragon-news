import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../pages/NewsDetails";



const router= createBrowserRouter([
   
    {path:'/', element:<HomeLayout/>,
        children:[
            {path:'/', element:<Navigate to='/category/01'></Navigate>},
            {path:'/category/:id', element:<CategoryNews/>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {path:'/news/:id', element:<NewsDetails/>,
        loader: ({params})=>fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {path:'/auth', element:<AuthLayout/>,
        children:[
            {path:'/auth/login', element:<Login/>},
            {path:'/auth/register', element:<Register></Register>},
        ]},
    {path:'*', element:<h2>Error</h2>},
]);

export default router;