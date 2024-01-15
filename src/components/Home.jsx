import React from "react";
import Landing from "./Landing";
import Customers from "./Customers";
import Eye from "./Eye/Eye";
import Footer from "./Footer";
import Services from "./Services";
import HeaderPhone from "./Phone/HeaderPhone";
import Left from "./Left";

const Home = () => {
    return (
        <>
            <Left />
            <Landing />
            <Customers />
            <HeaderPhone />
            <Eye />
            <Services />
            <Footer />
        </>
    );
};

export default Home;
