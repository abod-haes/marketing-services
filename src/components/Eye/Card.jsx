import React from "react";

const Card = (props) => {
    return (
        <div
            className="card relative z-10"
            style={{
                flex: 1,
            }}
        >
            <div
                style={{
                    backgroundColor: `${props.colors}`,
                    rotate: `${props.rotate}`,
                    transform: `translateY(${props.y})`,
                    color: `${props.WB ? "black" : "white"}`,
                    borderRadius: "25px",
                }}
                onMouse
                className={`  w-[235px] h-[335px] cont flex cursor-pointer  flex-col gap-[30px] bg-[${props.colors}] p-[20px]  `}
            >
                <img
                    src={`/assest/${props.i}${props.i}.png`}
                    alt=""
                    className="w-fit max-h-[28px]"
                />
                <div className="flex flex-col">
                    <p>Web experience with character(s).</p>
                    <p>Diary of a Wimpy Kid</p>
                    <img
                        src={`/assest/${props.i}.png`}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
