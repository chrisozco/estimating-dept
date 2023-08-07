import React from "react";
import { slide as Menu } from 'react-burger-menu'
import styles from './HamburgerNav.module.scss'
import Link from "next/link";


const HamburgerNav = () => (
    <div className='relative p-0' id={styles.hidden}>
        <Menu customBurgerIcon={<HamburgerIcon />} width={'100%'} className='left-0 top-12 bm-overlay'>
            <Links />
        </Menu>
    </div>)

const HamburgerIcon = () => (
    <div className='p-1/2'>
        <svg className="w-10 h-10 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </div>
)

export const Links = () => (
    <div className='flex flex-col items-center'>
    <Link href="/" className='font-bold p-4 text-white bg-neutral-600 w-screen text-center'>Home</Link>
    <Link href="/posts" className='font-bold p-4 text-white bg-neutral-600 w-screen text-center'>Blog</Link>
    <Link href="/about-me" className='font-bold p-4 text-white bg-neutral-600 w-screen text-center'>About Me</Link>
    <Link href="/contact" className='font-bold p-4 text-white bg-neutral-600 w-screen text-center'>Contact</Link>
    </div>
)

export default HamburgerNav