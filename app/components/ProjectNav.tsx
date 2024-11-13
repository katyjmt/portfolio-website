"use client";

import Image from "next/image"
import Link from "next/link"
import {ArrowLeftIcon} from '@heroicons/react/24/outline';


export default function ProjectNav() {

  return (
    <nav className="navbar font-evie tracking-wide text-2xl sm:text-3xl fixed top-0 w-full px-1 z-50 bg-[var(--background)]">
      <ul className="flex justify-end items-center h-10">
        <li className="flex items-center gap-4">
          <Link href="mailto: katyjmt@gmail.com" target="_blank"><Image className="nav-icon" src="./icons/email.svg" alt="" width={28} height={28}/></Link>
          <Link href="https://www.linkedin.com/in/katy-thompson/" target="_blank"><Image className="nav-icon" src="./icons/linkedin.svg" alt="" width={28} height={28} /></Link>
          <Link href="https://github.com/katyjmt" target="_blank"><Image className="nav-icon" src="./icons/github.svg" alt="" width={28} height={28} /></Link>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <div className="breadcrumb-container w-11/12">
          <Link href="/" className="flex"><ArrowLeftIcon className="w-4 mr-2 md:w-5 hover:-translate-x-1"/>Go Back</Link>
        </div>
      </div>
    </nav>
  )
}