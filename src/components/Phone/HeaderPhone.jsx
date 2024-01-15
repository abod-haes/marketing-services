import React, { useEffect, useRef } from "react";
import SecondE from "./SecondE";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HeaderPhone = () => {
    const scale = useRef("");
    const text = useRef("");
    const hidden = useRef("");
    const scale2 = useRef("");
    const elementRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(scale.current, {
            width: "100%",
            height: "100%",
            duration: 1000,
            y: "65%",
            borderRadius: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: scale.current,
                start: "center center",
                end: "top -90%",
                // markers: true,
                scrub: true,
                // pin: ".po",
            },
        });
        gsap.to(text.current, {
            opacity: 1,
            duration: 1000,
            ease: "power1.out",
            scrollTrigger: {
                trigger: scale.current,
                start: "top -70%",
                end: "top -100",
                // markers: true,
                scrub: true,
                // pin: ".po",
            },
        });
        gsap.to(hidden.current, {
            opacity: 0,
            borderRadius: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: scale.current,
                start: "center center",
                end: "top -60%",
                // markers: true,
                scrub: true,
                // pin: ".po",
            },
        });
    }, []);
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation(scrollers);
        }
        function addAnimation(scrollers) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scrollerInner =
                    scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <>
            <div className="overflow-hidden ss h-[280vh]" ref={elementRef}>
                <div className="h-[110vh] w-[100vw] flex justify-center items-start">
                    <div
                        className="bg-MainBlack po w-[50%] h-[65%] mx-auto relative rounded-xl mb"
                        ref={scale}
                    >
                        <div
                            className="scroller tow"
                            data-speed="normal"
                            ref={scale2}
                        >
                            {" "}
                            <ul className="tag-list scroller__inner text-white pt-[0px]">
                                {" "}
                                <li className="text-[70px]">Parts</li>{" "}
                                <li className="text-[70px]">That</li>{" "}
                                <li className="text-[70px]">Represent</li>{" "}
                                <li className="text-[70px]">a</li>{" "}
                                <li className="text-[70px]"> Whole</li>
                            </ul>{" "}
                        </div>
                        <div
                            ref={hidden}
                            className="absolute left-0 top-[150px] w-full"
                        >
                            <div
                                className="scroller tow border-none "
                                data-speed="normal"
                            >
                                {" "}
                                <ul className=" scroller__inner text-white py-[20px]">
                                    <li className="bg-[#de85b1] w-[400px] h-[40px] rounded-[40px] mx-[300px]"></li>
                                </ul>{" "}
                            </div>
                            <div
                                className="scroller tow border-none "
                                data-speed="normal"
                            >
                                {" "}
                                <ul className=" scroller__inner text-white py-[20px]">
                                    <li className="bg-[#71620f] w-[400px] h-[40px] rounded-[40px] mx-[400px]"></li>
                                </ul>{" "}
                            </div>
                            <div
                                className="scroller tow border-none "
                                data-speed="slow"
                            >
                                {" "}
                                <ul className=" scroller__inner text-white py-[20px]">
                                    <li className="bg-[#397252] w-[400px] h-[40px] rounded-[40px] mx-[500px]"></li>
                                </ul>{" "}
                            </div>
                        </div>
                        <div className="text-white text-[45px] px-[4.688vw] py-[2.708vw]">
                            <h1 className="h opacity-0" ref={text}>
                                with{" "}
                                <span className="bg-[#de85b1] px-[16px] py-[8px] rounded-full">
                                    beautiful designs
                                </span>{" "}
                                , bespoke
                                <span className="inline-block mx-[8px]">
                                    <span className="bg-[#ff5938] w-[20px] mx-[2px] inline-block h-[20px] rounded-full lo"></span>
                                    <span className="bg-[#ff5938] w-[20px] mx-[2px] inline-block h-[20px] rounded-full lo"></span>
                                    <span className="bg-[#ff5938] w-[20px] mx-[2px] inline-block h-[20px] rounded-full lo"></span>
                                </span>
                                <span className="bg-[#ff5938] px-[16px] py-[8px] mx-[12px] rounded-full">
                                    copywriting
                                </span>{" "}
                                , and
                                <br />
                                <span className="bg-[#8d4ec8] px-[16px] py-[8px] mx-[12px] rounded-full">
                                    powerful visuals
                                </span>{" "}
                                that are fresh and authentic. To achieve this,
                                we start with a{" "}
                                <span className="bg-[#71620f] px-[16px] py-[8px] mx-[12px] rounded-full">
                                    discovery
                                </span>{" "}
                                phase analyzing your customers, and we work
                                backward to find the most compelling emotional
                                solution.
                            </h1>
                        </div>
                    </div>
                </div>
                <SecondE />
            </div>
        </>
    );
};

export default HeaderPhone;
