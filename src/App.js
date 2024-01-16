import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
const Q = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={Q}>
            <h1 className="app2 hidden text-[40px] mx-[20px] mt-[40px] ">
                Please open it in desctop...
            </h1>
            <div className="dark:text-black bg-[#f3f3f3] app">
                <Header />
                <ToastContainer />
                <Outlet />
            </div>
        </QueryClientProvider>
    );
}
