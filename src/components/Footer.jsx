import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Footer = () => {
    const footer = useRef("");
    useEffect(() => {});
    return (
        <section
            ref={footer}
            className="footer bg-[#202020] overflow-hidden relative h-[100vh]  pt-[30px] flex items-center "
        >
            <div className="mx-auto w-full">
                <Link
                    heading="REBRANDING"
                    subheading="Learn what we do here"
                    imgSrc="/assest/footer1.PNG"
                    href="#"
                />
                <Link
                    heading="CAMPAIGNS "
                    subheading="
                    PRODUCT CAMPAIGNS & PROMOTIONS"
                    imgSrc="/assest/footer2.PNG"
                    href="#"
                />
                <Link
                    heading="SOCIAL "
                    subheading="SOCIAL ENGAGEMENT PROGRAMS"
                    imgSrc="/assest/footer3.PNG"
                    href="#"
                />
                <Link
                    heading="CUSTOMER "
                    subheading="CUSTOMER LOYALTY PROGRAMS
                    "
                    imgSrc="/assest/footer4.PNG"
                    href="#"
                />
            </div>
        </section>
    );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(-xPct);
        y.set(-yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className=" group w-full b relative flex items-center justify-between transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
            <span className="  absolute z-[1] w-full h-[1px] bottom-0 left-0 bg-white sp"></span>
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className=" pl-[100px]  relative z-10 block text-4xl font-bold text-white transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className=" pl-[100px] relative z-10 mt-2 block text-base text-white transition-colors duration-500 group-hover:text-neutral-50">
                    {subheading}
                </span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg" },
                    whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 opacity-[0.9]  max-w-full  rounded-lg object-cover  h-[300px]"
                alt={`Image representing a link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4  mx-8"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};
export default Footer;
