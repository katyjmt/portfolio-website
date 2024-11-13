"use client";

import Image from "next/image"
import Link from "next/link"
import {useState} from "react"

export default function Nav() {
  const [activeLink, setActiveLink] = useState("")

  const handleSetActive = (section: string) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar font-evieCondensed tracking-wide uppercase text-2xl md:text-3xl fixed top-0 h-10 w-full px-1 z-50 bg-[var(--background)]">
      <div>
        <ul className="flex justify-between">
          <li><Link onClick={() => handleSetActive('about')} className={`hover:underline hover:underline-offset-4 ${activeLink === 'about' ? 'underline underline-offset-4' : ''}`} href="#about">About</Link></li>
          <li><Link onClick={() => handleSetActive('portfolio')} className={`hover:underline hover:underline-offset-4 ${activeLink === 'portfolio' ? 'underline underline-offset-4' : ''}`} href="#portfolio">Portfolio</Link></li>
          <li className="flex items-center gap-4">
            <Link href="mailto: katyjmt@gmail.com" target="_blank"><Image className="nav-icon" src="./icons/email.svg" alt="" width={28} height={28}/></Link>
            <Link href="https://www.linkedin.com/in/katy-thompson/" target="_blank"><Image className="nav-icon" src="./icons/linkedin.svg" alt="" width={28} height={28} /></Link>
            <Link href="https://github.com/katyjmt" target="_blank"><Image className="nav-icon" src="./icons/github.svg" alt="" width={28} height={28} /></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}