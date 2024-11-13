"use client";

import About from "./components/About";
import BrandBar from "./components/BrandBar";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Scroller from "./components/Scroller";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // function adjustSectionHeight() {
  //   const navbarHeight = document.querySelector('.navbar').offsetHeight;
  //   // const scrollerHeight = document.querySelector('.scroll-container').offsetHeight;
  //   // const sections = document.querySelectorAll('.section');
  //   const home = document.querySelector('.home');
  //   const viewportHeight = window.innerHeight;

  //   // sections.forEach(section => {
  //   //   (section as HTMLElement).style.height = `${viewportHeight - navbarHeight}px`;
  //   // });

  //   (home as HTMLElement).style.height = `${viewportHeight - navbarHeight}px`;
  //   (home as HTMLElement).style.marginTop = `${navbarHeight}px`;

  // }

  // // Adjust height on page load and window resize
  // window.addEventListener('load', adjustSectionHeight);
  // window.addEventListener('resize', adjustSectionHeight);

  return (
    <>
      <Nav />
      <div className="overflow-hidden mb-20">
        <div className="main-container flex flex-col justify-between items-center gap-28">
          <div className="section !pt-0 justify-center h-screen">
            <Scroller />
            <div className="font-evie text-xl tracking-wider ml-1">
              &lt;&gt; Digital producer &lt;&gt; Full-stack developer &lt;&gt;
              Eye-catching websites and useful web tools &lt;&gt;
            </div>
          </div>
          <div id="about" className="section inset">
            <About />
          </div>
          <div id="portfolio" className="section inset">
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
}
