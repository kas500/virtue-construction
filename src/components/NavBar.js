"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow px-8 py-6">
                <div className="flex justify-between items-center">
                    {/* Logo + Company Name */}
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            width={70}
                            height={70}
                            className="object-contain"
                        />
                        <span className="hidden md:inline text-lg md:text-2xl font-bold uppercase tracking-wide text-gray-800">
                            Virtue Construction NW, LLC
                        </span>
                    </Link>

                    {/* Burger Icon - Mobile */}
                    <button
                        className="md:hidden text-gray-800 text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>

                    {/* Nav Links - Desktop */}
                    <ul className="hidden md:flex gap-8 font-bold uppercase text-base md:text-xl">
                        <li>
                            <Link href="/" className="hover:text-[#6B8E23] transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-[#6B8E23] transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/estimate" className="hover:text-[#6B8E23] transition">
                                Estimate
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#6B8E23] transition">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="flex flex-col gap-6 mt-6 font-bold uppercase text-base text-gray-800 md:hidden">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#6B8E23] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="hover:text-[#6B8E23] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/estimate"
                                className="hover:text-[#6B8E23] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Estimate
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-[#6B8E23] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
}
