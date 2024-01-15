import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Customers = () => {
    const text = useRef("");

    const para = useRef("");
    const img1 = useRef("");
    const img2 = useRef("");
    useEffect(() => {
        gsap.to(text.current, {
            duration: 3,
            height: 245,
            scrollTrigger: {
                trigger: ".text2",
                start: "top 70%",
                end: "top 50%",
                scrub: 2,
            },
        });

        gsap.to(para.current, {
            duration: 3,
            y: -50,
            scrollTrigger: {
                trigger: ".text2",
                // end: "bottom 100%",
                toggleActions: "restart reverse restart reverse",
                start: "bottom 60%",
                scrub: 2,
            },
        });
        gsap.fromTo(
            img1.current,
            {
                duration: 3,
                autoAlpha: 0,
                scale: 0.3,
            },
            {
                duration: 3,
                autoAlpha: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".img1",
                    start: "top 70%",
                    end: "top 0%",
                    scrub: 2,
                    onLeave: () => {
                        gsap.to(img1.current, {
                            duration: 5,
                            autoAlpha: 0,
                            scale: 0.3,
                            y: -100,
                            scrollTrigger: {
                                // markers: true,
                                trigger: ".img1",
                                scrub: 2,
                                start: "top -20%",
                                end: "top -70%",
                            },
                        });
                    },
                },
            }
        );
        gsap.fromTo(
            img2.current,
            {
                duration: 3,
                opacity: 0,
                scale: 0.3,
            },
            {
                duration: 3,
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".img2",
                    start: "top 70%",
                    onLeave: () => {
                        gsap.to(img2.current, {
                            duration: 5,
                            autoAlpha: 0.5,
                            scale: 0.4,
                            y: -100,
                            scrollTrigger: {
                                trigger: ".img2",
                                scrub: 2,
                                start: "top -20%",
                                end: "top -70%",
                            },
                        });
                    },
                    end: "top 0%",
                    scrub: 2,
                },
            }
        );
    }, []);

    return (
        <div className="customer  overflow-hidden">
            <div className=" relative px-[10.469vw] con">
                <div className="text2 h-[212px]">
                    <div
                        className="overflow-hidden h-[0px] flex items-start "
                        ref={text}
                    >
                        <p className="mt-[40px]" ref={para}>
                            CUSTOMERS
                        </p>
                        <div>
                            <h1 className="font-extralight pl-[1.51vw] leading-[1.2] text-[80px]">
                                Need
                                <p className="font-extralight block ml-[0.06em]">
                                    Connection
                                </p>{" "}
                            </h1>

                            <h2 className="font-extralight mt-[10px] pl-[1.979vw] text-[17px]">
                                THEY WANT TO BUY BRANDS THEY LOVE AND TRUST.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="videos flex mt-[80px] justify-between">
                    <div className="rounded-lg basis-[25%] img1 ">
                        <img
                            src="/assest/customersGif.gif"
                            alt=""
                            ref={img1}
                            className="w-full rounded-[50px]"
                        />
                    </div>
                    <div className="basis-[50%] img2">
                        <img
                            src="/assest/customers.png"
                            alt=""
                            ref={img2}
                            className=" mt-[80px] rounded-[30px] "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
