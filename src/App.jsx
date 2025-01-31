import React from "react";
import Navbar from "./components/navbar/Navbar";
import ProvideCard from "./components/card/ProvideCard";
import { IoIosArrowRoundForward, IoMdCheckmark } from "react-icons/io";
import PowefullCard from "./components/card/PowefullCard";

const App = () => {
    const ProvideList = [
        {
            img: "/src/assets/icons/chat.svg",
            h1: "24/7 Chat Service",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
        {
            img: "/src/assets/icons/phone.svg",
            h1: "Great Communication ",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
        {
            img: "/src/assets/icons/custom.svg",
            h1: " Customizable Settings",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
        {
            img: "/src/assets/icons/clock.svg",
            h1: " Increased Efficiency",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
        {
            img: "/src/assets/icons/cloud.svg",
            h1: " Cloud Technology",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
        {
            img: "/src/assets/icons/horn.svg",
            h1: " On Demand Notifications",
            p: "Sublime is easy to use and totally customizable to your business needs.",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="flex items-center h-full">
                        <div className="space-y-5 container">
                            <p className="text-[#6A6A77] ">
                                55,000+ trusted Businesses
                            </p>
                            <h1 className="text-7xl text-blac font">
                                Build your next project faster.
                            </h1>
                            <p>
                                Use to streamline your processes, save time and
                                effort and increase your sales exponentially.{" "}
                            </p>
                            <div className="flex relative max-w-[400px] mt-5">
                                <input
                                    type="email"
                                    className="w-full py-4 outline outline-1 outline-black rounded-full px-6"
                                    name=""
                                    placeholder="Enter your email address"
                                />{" "}
                                <button className="absolute right-0 bg-[#333333] text-white py-4 px-6 rounded-full ">
                                    Get Started
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/src/assets/icons/ceklis.svg"
                                        alt=""
                                    />
                                    <p>On Demand Support</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/src/assets/icons/ceklis.svg"
                                        alt=""
                                    />
                                    <p>Seamless Cloud Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/src/assets/gradient/Gradient+Blur.svg"
                            alt=""
                            className="absolute top-0 -left-56 w-full h-full -z-10"
                        />
                        <img src="/src/assets/images/Container.svg" alt="" />
                    </div>
                </div>

                <div className="container my-40 ">
                    <div className="flex justify-between items-center gap-52 border-y-2 py-20">
                        <div className="w-80">
                            <h1 className="text-4xl mb-3">
                                15,000+ happy customers.
                            </h1>
                            <p>Using Sublime everyday and loving it!</p>
                        </div>
                        <div className="flex items-center gap-20">
                            <div className="">
                                <h1 className="text-5xl mb-4">24K</h1>
                                <p className="uppercase">trusted Reviews</p>
                            </div>
                            <div className="">
                                <h1 className="text-5xl mb-4">96%</h1>
                                <p className="uppercase">
                                    customer satısfactıon
                                </p>
                            </div>
                            <div className="">
                                <h1 className="text-5xl mb-4">32K</h1>
                                <p className="uppercase">Expenses saved</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <p className="fonr-medium">SUBLIME PRODUCTS</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                        <div className="w-2/3">
                            <h1 className="text-5xl">
                                Provide powerful solutions at all times.
                            </h1>
                        </div>
                        <div className="">
                            <div className="flex gap-4 mb-5">
                                <img src="/src/assets/icons/8.svg" alt="" />
                                <img src="/src/assets/icons/9.svg" alt="" />
                            </div>
                            <h1 className="">
                                Supercharge your productivity and optimize your
                                workflow with Sublime. Our intuitive interface
                                and robust features for you
                            </h1>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16  mb-52">
                            <img
                                src="/src/assets/gradient/Gradient+Blur (1).svg"
                                className="absolute bottom-0 -left-40 w-full h-full -z-10"
                                alt=""
                            />

                            {ProvideList.map((item, index) => (
                                <ProvideCard
                                    key={index}
                                    img={item.img}
                                    h1={item.h1}
                                    p={item.p}
                                />
                            ))}
                        </div>
                        {/* <img
                            src="/src/assets/images/paper.svg"
                            className="absolute -bottom-[149px] -left-[474px] w-full h-full z-10"
                            alt=""
                        />
                        <img
                            src="/src/assets/images/paper2.svg"
                            className="absolute -bottom-[149px] -right-[474px] w-full h-full z-10"
                            alt=""
                        /> */}
                    </div>
                </div>

                <div className="container mt-80">
                    <div className="flex items-center">
                        <div className="">
                            <img
                                src="/src/assets/icons/provide.svg"
                                alt=""
                                className="mb-10"
                            />
                            <div className="space-y-4 w-2/3">
                                <h1 className="text-5xl">
                                    Provide powerful solutions at all times.
                                </h1>
                                <p>
                                    Use Sublime to streamline your processes,
                                    save time and effort and increase your sales
                                    exponentially.{" "}
                                </p>
                                <div className="flex gap-5 items-center font-medium">
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmark className="text-2xl" />
                                        <p>On Demand Support</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdCheckmark className="text-2xl" />
                                        <p>Seamless Cloud Technology</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-8 py-2 outline outline-1 outline-black rounded-full">
                                    Learn More{" "}
                                    <span>
                                        <IoIosArrowRoundForward className="text-2xl" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/src/assets/gradient/Gradient+Blur (2).svg"
                                className="absolute top-10 -right-20 -z-10"
                                alt=""
                            />
                            <img src="/src/assets/images/provide.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container mt-40">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex mx-auto">
                            <img src="/src/assets/images/profil1.svg" alt="" />
                            <img src="/src/assets/images/profil2.svg" alt="" />
                            <img src="/src/assets/images/profil3.svg" alt="" />
                        </div>
                        <div className="flex">
                            <h1 className="text-5xl ">
                                Powerful Customer Support
                            </h1>
                        </div>
                        <div className="flex gap-2 items-end justify-end mr-20">
                            <img
                                src="/src/assets/icons/plus.svg"
                                width={20}
                                alt=""
                            />
                            <img
                                src="/src/assets/icons/8.svg"
                                width={20}
                                alt=""
                            />
                            <img
                                src="/src/assets/icons/9.svg"
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 relative">
                        <img
                            src="/src/assets/gradient/Gradient+Blur (3).svg"
                            className="absolute -z-10"
                            alt=""
                        />
                        <PowefullCard
                            img={"/src/assets/icons/team.svg"}
                            h1={"Our team shares values of success"}
                            p={
                                "At Sublime, our team is focussed on working with you to achieve success."
                            }
                        />
                        <PowefullCard
                            img={"/src/assets/icons/globe.svg"}
                            h1={"We’re on a mission to power our customers"}
                            p={
                                "Whatever your business needs, we're here for you and want to help."
                            }
                        />
                        <PowefullCard
                            img={"/src/assets/icons/warning.svg"}
                            h1={"We’re here to protect your data online"}
                            p={
                                "You can trust in our world class data protection methods and processes. "
                            }
                        />
                    </div>
                </div>

                <div className="mt-16 container">
                    <div className="flex justify-center relative">
                        <img
                            src="/src/assets/gradient/Gradient+Blur (4).svg"
                            className="absolute -z-10"
                            alt=""
                        />
                        <div className="flex gap-5 mt-20">
                            <img src="/src/assets/icons/plus.svg" alt="" />
                            <img src="/src/assets/icons/9.svg" alt="" />
                        </div>
                    </div>
                    <div className="my-10 text-center">
                        <h1 className="text-6xl">Power your business </h1>
                        <h1 className="text-6xl">with Sublime </h1>
                        <p className="text-[#4D4D56] w-1/2 mx-auto mt-5 ">
                            Sublime seamlessly integrates with your existing
                            infrastructure, allowing you to effortlessly connect
                            and consolidate data from various sources.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative items-center">
                        <img src="/src/assets/gradient/Gradient+Blur (5).svg" className="absolute left-20 -z-10" alt="" />
                        <div className="space-y-10">
                            <div className="">
                                <img
                                    src="/src/assets/icons/increased.svg"
                                    alt=""
                                />
                                <h1 className="text-2xl mt-4">
                                    Increased Efficiency
                                </h1>
                                <p className="w-80">
                                    Our workflows are streamlined, optimised and
                                    built to perform.
                                </p>
                            </div>

                            <div className="">
                                <img src="/src/assets/icons/great.svg" alt="" />
                                <h1 className="text-2xl mt-4">
                                    Great Communication
                                </h1>
                                <p className="w-80">
                                    We're here for you at any time of the day
                                    and would love to hear from you.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <img src="/src/assets/images/power.svg" alt="" />
                        </div>
                        <div className="space-y-10">
                            <div className="">
                                <img
                                    src="/src/assets/icons/simple.svg"
                                    alt=""
                                />
                                <h1 className="text-2xl mt-4">
                                    Simple Systems
                                </h1>
                                <p className="w-80">
                                    Sublime is easy to use and even easy to
                                    integrate with existing systems.
                                </p>
                            </div>

                            <div className="">
                                <img src="/src/assets/icons/easily.svg" alt="" />
                                <h1 className="text-2xl mt-4">
                                    Easily Customized
                                </h1>
                                <p className="w-80">
                                    Need a more custom solution? Done - let's
                                    chat about it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
