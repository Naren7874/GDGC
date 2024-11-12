import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import TextScramble from "../utils/TextScramble";
import { IconChevronRight } from "@tabler/icons-react";

const Contact = () => {
    return (
        <>
            <footer className="text-white ">
                <div className="my-10 flex flex-col">
                    <TextScramble text="Contact" />

                    {/* Social Media Links */}
                    <div className="flex justify-center">
                        <div className=" grid grid-cols-4 sm:flex sm:justify-center gap-6">
                            {/* LinkedIn */}
                            <div className="group flex items-center space-x-2 sm:space-x-4">
                                <div className="icon bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#0077b5]">
                                    <FaLinkedinIn className="text-xl sm:text-2xl text-black group-hover:text-white" />
                                </div>
                                {/* Hide hover text on mobile */}
                                <span className="hidden sm:inline text-sm sm:text-lg font-medium text-[#0077b5] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    LinkedIn
                                </span>
                            </div>

                            {/* Discord */}
                            <div className="group flex items-center space-x-2 sm:space-x-4">
                                <div className="icon bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#5865F2]">
                                    <BsDiscord className="text-xl sm:text-2xl text-black group-hover:text-white" />
                                </div>
                                <span className="hidden sm:inline text-sm sm:text-lg font-medium text-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Discord
                                </span>
                            </div>

                            {/* Instagram */}
                            <div className="group flex items-center space-x-2 sm:space-x-4">
                                <div className="icon bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#e1306c]">
                                    <FaInstagram className="text-xl sm:text-2xl text-black group-hover:text-white" />
                                </div>
                                <span className="hidden sm:inline text-sm sm:text-lg font-medium text-[#e1306c] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Instagram
                                </span>
                            </div>

                            {/* Twitter */}
                            <div className="group flex items-center space-x-2 sm:space-x-4">
                                <div className="icon bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#000000]">
                                    <BsTwitterX className="text-xl sm:text-2xl text-black group-hover:text-white" />
                                </div>
                                <span className="hidden sm:inline text-sm sm:text-lg font-medium text-[#1da1f2] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Twitter
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-16 bg-transparent"></div>
                    <div className="flex justify-center rounded-xl p-5 overflow-hidden">
                        <iframe
                            title="BVM Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7104044198213!2d72.92163631537082!3d22.552518539390064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1599647332764!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            className="rounded-xl"
                        />
                    </div>
                </div>
                <div className="h-16 bg-transparent"></div>
                <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-12 sm:gap-24 items-start px-4">
                    {/* Left Section - Logo and About */}
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <img
                                src="/logo.png"
                                alt="GDGC Logo"
                                className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3"
                            />
                            <span className="font-bold text-lg sm:text-xl">
                                Google Developer Groups
                            </span>
                        </div>
                        <div className="text-gray-400">
                            <h4 className="font-semibold mb-2">About</h4>
                            <p className="text-sm sm:text-base">
                                Helping students bridge the gap between theory
                                and practice.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
                            <li className="flex gap-1">
                                <IconChevronRight />
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li className="flex gap-1">
                                <IconChevronRight />
                                <a href="/about" className="hover:underline">
                                    About
                                </a>
                            </li>

                            <li className="flex gap-1">
                                <IconChevronRight />
                                <a href="/about" className="hover:underline">
                                    Team
                                </a>
                            </li>

                            <li className="flex gap-1">
                                <IconChevronRight />
                                <a href="/about" className="hover:underline">
                                    Contact
                                </a>
                            </li>

                            <li className="flex gap-1">
                                <IconChevronRight />
                                <p> Flashback</p>{" "}
                                <a href="/about" className="hover:underline">
                                    {" "}
                                    2023
                                </a>
                                <a href="/about" className="hover:underline">
                                    {" "}
                                    2022
                                </a>
                                <a href="/about" className="hover:underline">
                                    {" "}
                                    2021
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-4">Have Questions?</h4>
                        <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
                            <li>
                                <span className="inline-block mr-2">📍</span>
                                Birla Vishvakarma Mahavidyalaya, Vidyanagar,
                                Anand.
                            </li>
                            <li>
                                <span className="inline-block mr-2">📧</span>
                                <a href="mailto:developerstudentclubs.bvm@gmail.com">
                                    developerstudentclubs.bvm@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 mt-8 px-4">
                    <p className="text-sm sm:text-base">
                        Copyright © 2024 All rights reserved | This site is made
                        by Jaimin Detroja & Narendra Mali
                    </p>
                </div>
                <div className="h-8 bg-transparent"></div>
            </footer>
        </>
    );
};

export default Contact;
