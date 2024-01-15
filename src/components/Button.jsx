import React, { useState } from "react";
import { Fragment } from "react";

export const Button = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };
    const handleMouseMove = (event) => {
        if (isHovered) {
            let xx = event.nativeEvent.offsetX - event.target.clientWidth / 2;
            let yy = event.nativeEvent.offsetY - event.target.clientHeight / 2;
            setPosition({
                x: Math.max(-5, Math.min(5, xx)),
                y: Math.max(-5, Math.min(5, yy)),
            });
        }
    };

    return (
        <Fragment>
            <div className="work">
                <button className="relative w-[185px] h-[45px] text-white text-[12px] flex justify-center items-center z-10">
                    <span
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            transition: "all .5s linear 0s ",
                        }}
                        className="absolute bg-[#202020]  h-full flex items-center w-full justify-center text-sm rounded-3xl z-[-2]"
                    ></span>
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className="w-[80%] h-[80%] absolute z-[2]"
                    ></span>
                    Ready To Transform?
                </button>
            </div>
        </Fragment>
    );
};
