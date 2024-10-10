//Pieter Venter u23896257
import React from "react";
import { Home } from "./webpages/Home";
import { Posts } from "./webpages/Posts";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/posts",
        element: <Posts/>,
        errorElement: <p>Error: Posts not loading properly</p>
    },
    {
        path:"*",
        element: <Home/>
    }
]);

export class App extends React.Component {

    render(){
        return(
            <RouterProvider router={router}>

            </RouterProvider>
        );
    }
}