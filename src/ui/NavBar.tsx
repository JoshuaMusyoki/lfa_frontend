"use client"

import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import Logo from '../images/LFALogo.png';

const NavBar = () => (
    <header className="w-full  absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
            <Link href= '/' className="flex items-center">
            {/* <div className="flex items-center"> */}
                <Image
                src= {Logo}
                alt='lfa_logo'
                width={59}
                height={9}
                className='object-contain rounded-[10px]'
             />
            {/* </div>  */}
            </Link>
            {/* Navigation Links */}
            <div className="flex space-x-8">
               <Link href="/" className="text-white hover:text-gray-300">Home</Link>
               <Link href="/about" className="text-white hover:text-gray-300">About</Link>
               <Link href="/whatwedo" className="text-white hover:text-gray-300">What We Do</Link>
               <Link href="/contact" className="text-white hover:text-gray-300">Our Leadership</Link>
               <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>

            </div>
            <CustomButton
            title="Donate"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
        </nav>
    </header>
);

export default NavBar;