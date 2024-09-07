"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../../../public/images/LFALogo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.container}>
            <div className="bg-white rounded-lg shadow-md py-4 px-6 sm:px-16 max-w-[1440px] mx-auto">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={Logo}
                            alt='lfa_logo'
                            width={50}
                            height={9}
                            className={styles.logo}
                        />
                    </Link>
                    <h3 className="text-xl font-bold hidden md:block">
                        <i>Make A <br />Difference</i>
                    </h3>
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-3xl">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div className={`flex-col md:flex md:flex-row md:space-x-6 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                        <Link href="/" className={styles.item}>Home</Link>
                        <Link href="/about" className={styles.item}>About</Link>
                        <Link href="/whatwedo" className={styles.item}>What We Do</Link>
                        <Link href="/leadership" className={styles.item}>Our Leadership</Link>
                        <Link href="/projects" className={styles.item}>Projects</Link>
                        <Link href="/blog" className={styles.item}>Blog</Link>
                        <Link href="/events" className={styles.item}>Events</Link>
                        <Link href="/contact" className={styles.item}>Contact Us</Link>
                        <Link href="/jobs" className={styles.item}>Jobs</Link>
                        
                        <div className="flex items-center mt-4 md:mt-0">
                            <div className="bg-white rounded-[20px] p-2">
                                <CustomButton
                                    title="Donate"
                                    btnType="button"
                                    containerStyles="text-white bg-blue-600 rounded-full py-2 px-4"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
