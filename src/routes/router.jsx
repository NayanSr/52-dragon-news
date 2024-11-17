import { createBrowserRouter } from "react-router-dom";

const router= createBrowserRouter([
    {path:'/', element:<h2>Home</h2>},
    {path:'/news', element:<h2>News</h2>},
    {path:'/auth', element:<h2>Login</h2>},
    {path:'*', element:<h2>Error</h2>},
]);

export default router;