import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
const Q = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={Q}>
            <div className="dark:text-black bg-[#f3f3f3]">
                <Header />
                <ToastContainer />
                <Outlet />
            </div>
        </QueryClientProvider>
    );
}
