"use client"

import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
// import Logo from './Logo';
import Logo from '../../../public/images/LFALogo.png';
const NavBar = () => (
    <header className="w-full absolute z-10">
        <div className="bg-white rounded-lg shadow-md py-4 px-6 sm:px-16 max-w-[1440px] mx-auto">
            <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                {/* <Logo /> */}
                    <Image
                        src={Logo}
                        alt='lfa_logo'
                        width={59}
                        height={9}
                        className='object-contain rounded-[5px]'
                    />
                </Link>
                <h3 className="text-xl font-bold">
                    <i>Make A <br />Difference</i>
                </h3>
                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                    <Link href= "/about" className="text-gray-800 hover:text-gray-600">About</Link>
                    <Link href="/whatwedo" className="text-gray-800 hover:text-gray-600">What We Do</Link>
                    <Link href="/leadership" className="text-gray-800 hover:text-gray-600">Our Leadership</Link>
                    <Link href="/projects" className="text-gray-800 hover:text-gray-600">Projects</Link>
                    <Link href="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
                    <Link href="/events" className="text-gray-800 hover:text-gray-600">Events</Link>
                    <Link href="/contact" className="text-gray-800 hover:text-gray-60">Contact Us</Link>
                </div>
                <div className="flex items-center">
                    <div className="bg-white rounded-[20px] p-2">
                        <CustomButton
                            title="Donate"
                            btnType="button"
                            containerStyles="text-white bg-blue-600 rounded-full py-2 px-4"
                        />
                    </div>
                </div>
            </nav>
        </div>
    </header>
);

export default NavBar;
