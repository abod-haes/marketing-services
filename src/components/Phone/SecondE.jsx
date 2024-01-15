import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

const SecondE = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const hidden2 = useRef("");

    const hidden1 = useRef("");
    const handleMouseMove = (event) => {
        let xx = Math.max(
            5,
            Math.min(95, (event.clientX * 200) / window.innerWidth)
        );
        let yy = Math.max(
            5,
            Math.min(95, (event.clientY * 200) / window.innerWidth)
        );
        setPosition({
            x: xx + "%",
            y: yy + "%",
        });
    };
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
    }, []);
    useEffect(() => {
        gsap.fromTo(
            hidden2.current,
            {
                y: "58%",
            },
            {
                width: "50%",
                height: "65%",
                duration: 1000,
                borderRadius: 0,
                y: "80%",
                scrollTrigger: {
                    trigger: hidden2.current,
                    start: "top top",
                    end: "bottom 50%",
                    scrub: true,
                    // pin: ".po",
                },
            }
        );
        gsap.fromTo(
            hidden1.current,
            {},
            {
                width: "80px",
                height: "300px",
                duration: 1000,
                scrollTrigger: {
                    trigger: hidden2.current,
                    start: "top top",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );
    }, []);
    return (
        <div className=" h-[110vh] w-[100vw] flex justify-center items-start">
            <div
                ref={hidden2}
                className="flex bg-MainBlack scroll items-center justify-center gap-[70px] text-white px-[60px] w-full h-full"
            >
                <p className="text-[30px]">
                    BITS & BOBS <br /> TRANSFORM
                    <br />
                    YOUR BRAND
                </p>
                <span
                    ref={hidden1}
                    className="min-w-[400px] rounded-[100px] h-[750px] inline-block bg-[#ffffff66] relative  "
                >
                    <div
                        className="top-[50%] left-[50%] bg-[#71620f] w-[120px] h-[120px] rounded-full absolute  flex items-center justify-center "
                        style={{
                            left: `${position.x}`,
                            transition: "all 0s linear 0s ",
                            top: `${position.y}`,
                            transform: `translate(-${position.x} , -${position.y})`,
                        }}
                    >
                        {" "}
                        <span className="bg-black w-[50px] h-[50px] rounded-full  "></span>{" "}
                    </div>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlLang="en"
                    className="relative"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 500 500"
                >
                    <title>Circular Text Path</title>
                    <defs>
                        <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300 a150,150 0 0,1 0,300 Z"
                            transform="rotate(12,250,250)"
                        />
                    </defs>
                    <g className="textcircle">
                        <image
                            xlinkHref="/assest/WhiteHand.svg"
                            alt="a"
                            width="130"
                            height="130"
                            x="175"
                            className="HandImg"
                            y="175"
                        />
                        <text textLength="940">
                            <textPath
                                xlinkHref="#textcircle"
                                ariaLabel="CSS & SVG are awesome"
                                textLength="940"
                            >
                                BITS & BOBS TRANSFORM YOUR BRAND
                            </textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default SecondE;
