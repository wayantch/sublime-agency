import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProvideCard = ({ img, h1, p }) => {
    return (
        <div className="w-full h-80 bg-white outline outline-1 outline-slate-200 shadow-lg rounded-xl p-10 relative">
            
            <img src={img} alt="" className="mb-5" />
            <h1 className="text-2xl text-blackSublime mb-2">{h1}</h1>
            <p className="mb-5">{p}</p>
            <button className="px-8 p-2 bg-[#FCFCFD] outline outline-1 outline-slate-200 rounded-full ">
                <MdArrowOutward className="text-blackSublime text-2xl" />
            </button>
        </div>
    );
};

export default ProvideCard;
