import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="w-full bg-blackSublime text-white">
                <div className="container flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/icons/kubus.svg" alt="" />
                        <p className="text-sm">
                            The banner is to inform visitors of an important
                            message
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="/src/assets/icons/fb-nav.svg"
                            alt=""
                        />
                        <img
                            src="/src/assets/icons/pinterest.svg"
                            alt=""
                        />
                        <img
                            src="/src/assets/icons/in-nav.svg"
                            alt=""
                        />
                        <img
                            src="/src/assets/icons/message-nav.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <nav>
                <div className="container py-8 flex justify-between items-center">
                    <img src="/src/assets/icons/logo.svg" alt="" />
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-sm">
                            Home
                        </a>
                        <a href="#" className="text-sm">
                            Company
                        </a>
                        <a href="#" className="text-sm">
                            Pricing
                        </a>
                        <a href="#" className="text-sm">
                            Blog
                        </a>
                        <a href="#" className="text-sm">
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#" className="">
                            Sign In
                        </a>
                        <button className="bg-blackSublime text-white px-6 py-2 rounded-full text-sm">
                            Sign up for free
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
