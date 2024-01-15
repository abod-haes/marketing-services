import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Scrollers from "./ScrollText";

const Eye = () => {
    const colors = ["#ffe92f", "#eadcab", "#ff4500", "#231f20", "#ffc7b2"];
    const y = ["40px", "-60px", "55px", "-45px", "38px", "33px"];
    const rotate = ["-10deg", "-20deg", "30deg", "-35deg", "10deg", "20deg"];
    const WB = [true, true, false, false, false, true];
    const hiddenText1 = useRef("");

    const pop = useRef("");
    const text2 = useRef("");

    const hiddenText2 = useRef("");
    const [position, setPosition] = useState({ x: 50, y: 50 });
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
            x: +xx + "%",
            y: yy + "%",
        });
    };
    const text = useRef("");
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove); // Attach the event listener to the window object
    });
    useEffect(() => {
        gsap.to(text2.current, {
            duration: 3,
            height: 120,
            scrollTrigger: {
                trigger: ".text3",
                toggleActions: "restart reverse restart reverse",
                start: "top 90%",
                end: "bottom 70%",
                scrub: 2,
            },
        });
        gsap.to(hiddenText1.current, {
            duration: 3,
            height: 145,
            scrollTrigger: {
                trigger: ".hid1",
                start: "top 80%",
                end: "top 60%",
                scrub: 2,
            },
        });
        gsap.to(hiddenText2.current, {
            duration: 3,
            height: 156,
            scrollTrigger: {
                trigger: ".hid2",
                start: "top 80%",
                end: "top 60%",
                scrub: 2,
            },
        });
        gsap.to(pop.current, {
            duration: 3,
            backgroundColor: "#202020",
            scrollTrigger: {
                trigger: pop.current,
                start: "bottom 50%",
                end: "bottom 0%",
                scrub: 2,
            },
        });
    }, []);
    return (
        <div className="customer overflow-hidden pb-[150px]  eye relative z-[10]">
            <div className="pop absolute -z-10 w-full h-full " ref={pop}></div>
            <div className="text3 h-[120px] mt-[30px] w-[900px] mx-auto">
                <div
                    className=" h-[0px] flex items-start overflow-hidden  "
                    ref={text2}
                >
                    <div>
                        <h1 className="font-extralight pl-[1.51vw] leading-[1.2] text-[35px] text-center">
                            CRAFTING COMPELLING, DATA-DRIVEN BRAND EXPERIENCES
                            THAT CONNECT WITH AUDIENCES’ EMOTIONAL CORE TAKES A
                            WEALTH OF RESEARCH AND UNDERSTANDING.
                        </h1>
                    </div>
                </div>
            </div>
            <div className=" relative py-[80px] px-[10.469vw] con">
                <div className="text2">
                    <div
                        className="overflow-hidden items-start  mx-auto"
                        ref={text}
                    >
                        <div>
                            <div className="h-[145px]">
                                <div
                                    className="hid1 h-0  overflow-hidden"
                                    ref={hiddenText1}
                                >
                                    <h1 className="font-extralight pl-[1.51vw] leading-[1.2] text-center text-[130px] tracking-[0.065em] font-normal	">
                                        We{" "}
                                        <span className=" font-extralight">
                                            Design
                                        </span>
                                    </h1>
                                </div>
                            </div>
                            <div className="h-[156px]">
                                <div
                                    className="hid2 h-0 overflow-hidden"
                                    ref={hiddenText2}
                                >
                                    <h1 className="font-extralight flex items-center  pl-[1.51vw] leading-[1.2] text-center text-[130px] tracking-[0.065em] font-normal	">
                                        Eye{" "}
                                        <span className="min-w-[1.477em] rounded-[0.4705em] h-[0.942em] bg-white relative  ">
                                            <div
                                                className="top-0 left-[50%] bg-[#397252] w-[77px] h-[77px] rounded-full absolute  flex items-center justify-center "
                                                style={{
                                                    left: `${position.x}`,
                                                    transition:
                                                        "all 0s linear 0s ",
                                                    top: `${position.y}`,
                                                    transform: `translate(-${position.x} , -${position.y})`,
                                                }}
                                            >
                                                {" "}
                                                <span className="bg-black w-[25px] h-[25px] rounded-full  "></span>{" "}
                                            </div>
                                        </span>
                                        Grabbing
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Scrollers />
            <div className="flex mx-[60px]  ">
                {colors.map((e, i) => (
                    <Card
                        WB={WB[i]}
                        i={`${i + 1}`}
                        colors={e}
                        key={i}
                        rotate={rotate[i]}
                        y={y[i]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Eye;
