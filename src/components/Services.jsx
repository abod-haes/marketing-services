import gsap from "gsap/all";
import React, { useEffect, useRef } from "react";

const Services = () => {
    const pop = useRef("");

    const servicesTop = useRef([]);
    const servicesBottom = useRef([]);
    const services = useRef([]);

    useEffect(() => {
        servicesTop.current.forEach((service, index) => {
            gsap.timeline().to(service, {
                duration: 2,
                opacity: 0,
                x: 0,
                y: 256 * 3 - 256 * index,
                scrollTrigger: {
                    trigger: ".services",
                    start: "top -20%",
                    end: "top -60%",
                    scrub: 2,
                },
            });
        });
        servicesBottom.current.forEach((service, index) => {
            gsap.timeline().to(service, {
                duration: 2,
                x: 0,
                opacity: 0,
                y: -256 * (index + 1),
                scrollTrigger: {
                    trigger: ".services",
                    start: "top -20%",
                    end: "top -70%",
                    scrub: 2,
                },
            });
        });
        gsap.to(pop.current, {
            duration: 3,
            backgroundColor: "#202020",
            scrollTrigger: {
                trigger: pop.current,
                start: "top 50%",
                end: "top 0%",
                scrub: 2,
            },
        });
        gsap.to(services.current, {
            duration: 3,
            height: 1000,
            // y: -400,
            scrollTrigger: {
                trigger: ".services",
                start: "top -20%",
                end: "top -50%",
                scrub: 2,
            },
        });
    }, []);
    const s = ["1", "1", "1"];
    return (
        <div className="services relative z-10 " ref={services}>
            <div
                className="pop absolute z-[-1] w-full h-[100%] left-0 top-[0%]  "
                ref={pop}
            />
            {s.map((e, index) => (
                <h1
                    key={index}
                    className="H1  text-white text-center  s mx-auto text-[256px]"
                    ref={(el) => (servicesTop.current[index] = el)}
                >
                    Services
                </h1>
            ))}
            <h1 className=" text -white relative z-[10]  text-white text-center  s mx-auto text-[256px] space-x-1">
                Services
            </h1>

            {s.map((e, index) => (
                <h1
                    key={index}
                    className="H1  text-white text-center  s mx-auto text-[16.625vw]"
                    ref={(el) => (servicesBottom.current[index] = el)}
                >
                    Services
                </h1>
            ))}
        </div>
    );
};

export default Services;
