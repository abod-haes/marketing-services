import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
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
                x: Math.max(-7, Math.min(7, xx)),
                y: Math.max(-7, Math.min(7, yy)),
            });
        }
    };

    const ref = useRef("");
    const text = useRef("");
    const splitt = useRef("");

    const text2 = useRef("");
    const img = useRef("");
    const gif1 = useRef("");
    const gif2 = useRef("");
    const gif3 = useRef("");
    useEffect(() => {
        // const mySplit = new SplitText(".rtl", { type: "chars" });
        // gsap.to(mySplit.chars, {
        //     y: 10,
        //     duration: 1,
        // });
        // spl();
        // console.log(s);
        gsap.to(gif1.current, {
            right: 110,
            duration: 1,
            y: 150,
            scrollTrigger: {
                trigger: ".gifs",
                // markers: true,
                onLeave: () => {
                    gsap.to(gif1.current, {
                        duration: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: ".gifs",
                            scrub: 2,
                            start: "top 30%",
                            end: "bottom 0%",
                        },
                    });
                },
                start: "top 100%",
                end: "top 30%",
                scrub: 2,
            },
        });
        gsap.to(gif2.current, {
            right: 140,
            duration: 1,
            y: 150,
            scrollTrigger: {
                trigger: ".gifs",
                // markers: true,
                start: "top 80%",
                onLeave: () => {
                    gsap.to(gif2.current, {
                        duration: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: ".gifs",
                            scrub: 2,
                            start: "top 30%",
                            end: "bottom 0%",
                        },
                    });
                },
                end: "top 30%",
                scrub: 2,
            },
        });
        gsap.to(gif3.current, {
            right: 190,
            duration: 1,
            y: 150,
            scrollTrigger: {
                trigger: ".gifs",
                start: "top 60%",
                end: "top 30%",
                scrub: 2,
                onLeave: () => {
                    gsap.to(gif3.current, {
                        duration: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: ".gifs",
                            scrub: 2,
                            start: "top 30%",
                            end: "bottom 0%",
                        },
                    });
                },
                // pin: true,
            },
        });
        gsap.to(img.current, {
            width: 500,
            borderRadius: 20,
            duration: 4,
            y: 150,
            // ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: ".imgLa",
                // markers: true,
                onLeave: () => {
                    gsap.to(img.current, {
                        duration: 1,
                        y: -110,
                        scrollTrigger: {
                            trigger: ".imgLa",
                            scrub: 2,
                            start: "bottom 30%",
                            end: "bottom 0%",
                        },
                    });
                },
                start: "bottom 100%",
                end: "bottom 30%",
                scrub: 1,
                // pin: true,
            },
        });

        gsap.to(ref.current, {
            duration: 1,
            width: 0,
            opacity: 0,
            height: 0,
            scrollTrigger: {
                trigger: ".spans",
                // markers: true,
                start: "bottom 80%",
                end: "bottom 60%",
                scrub: true,
            },
        });
        gsap.to(text.current, {
            duration: 3,
            height: 0,
            scrollTrigger: {
                trigger: ".spans",
                // markers: true,
                start: "bottom 80%",
                end: "bottom 60%",
                scrub: 2,
            },
        });
        gsap.to(text2.current, {
            duration: 3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".spans",
                // markers: true,
                start: "bottom 80%",
                end: "bottom 85%",
                scrub: true,
            },
        });
        gsap.to(splitt.current, {
            duration: 3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".spans",
                // markers: true,
                start: "bottom 80%",
                end: "bottom 60%",
                scrub: 2,
            },
        });
    });

    return (
        <div className="landing h-[120vh]  overflow-hidden">
            <div className=" relative py-[8.958vw] px-[10.469vw] cont h-[80vh] bg-pink">
                <div className="text h-[212px]">
                    <div className="h-[144px]">
                        <div className="overflow-hidden  h-[144px]" ref={text}>
                            <h1 className="font-normal pl-[1.51vw] leading-[1.2] LandingH1">
                                Transformative{" "}
                                <p className="font-extralight block ml-[0.06em]">
                                    Experiences
                                </p>{" "}
                            </h1>
                        </div>
                    </div>
                    <h2
                        className="font-extralight mt-[0.521vw] pl-[1.979vw] LandingH2"
                        ref={text2}
                    >
                        <strong className="fo">for</strong> Products{" "}
                        <strong className="fo">&</strong> Brands
                    </h2>
                </div>
                <div className="img mt-10 flex-1 flex flex-col w-fit items-end relative">
                    <div
                        className=" absolute top-[-30px] h-[100px] right-[165px]"
                        ref={splitt}
                    >
                        <p className="rt w-full h-full">
                            {"Helping CPG brands build engaging consu"
                                .split("")
                                .map((char, i) => (
                                    <span key={i} style={{ margin: "1px" }}>
                                        {char}
                                    </span>
                                ))}
                            <span className=" h-full absolute sp ml-2">
                                {"mer relationships"
                                    .split("")
                                    .map((char, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                transform: `rotate(${
                                                    i * 3
                                                }deg)`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                            </span>
                        </p>
                    </div>
                    <img
                        ref={img}
                        src="/assest/landing.gif"
                        alt=""
                        className=" w-[800px] imgLa max-h-[400px]  rounded-[160px] max-w-[800px]"
                    />
                </div>
                <div className="gifs">
                    <img
                        ref={gif1}
                        src="/assest/1.gif"
                        alt=""
                        className="w-[200px] h-[280px] rounded-2xl  absolute right-[-250px] -bottom-[160px] "
                    />
                    <img
                        ref={gif2}
                        src="/assest/2.gif"
                        alt=""
                        className="w-[200px] h-[280px] rounded-2xl  absolute right-[-250px] -bottom-[130px] "
                    />{" "}
                    <img
                        ref={gif3}
                        src="/assest/3.gif"
                        alt=""
                        className="w-[200px] h-[280px] rounded-2xl  absolute right-[-250px] -bottom-[100px] "
                    />
                </div>
                <div
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: "all 0.5s linear 0s",
                    }}
                    className="min-w-[70px]  absolute right-[130px] -bottom-10 "
                >
                    <span
                        ref={ref}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className="w-[70px] overflow-hidden h-[70px] rounded-[50%] border border-black flex items-center justify-center spans"
                    >
                        <IoIosArrowRoundDown className="text-5xl animate-bounce" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Landing;
