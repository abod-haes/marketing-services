import React from "react";
import { Button } from "./Button";

const Header = () => {
    return (
        <div className="header fixed w-full z-[100]">
            <div className="flex justify-between items-center p-[35px] ">
                <img
                    src="/assest/hand.png"
                    alt=""
                    className="w-[70px] transition rotate-6 cursor-pointer hover:animate-hello"
                />
                <Button />
            </div>
        </div>
    );
};

export default Header;
