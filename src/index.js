import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{ index: true, element: <Home /> }],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes} />{" "}
    </React.StrictMode>
);

reportWebVitals();
