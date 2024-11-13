"use client";

import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Scroller from "./components/Scroller";

export default function Home() {

  function adjustSectionHeight() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    // const scrollerHeight = document.querySelector('.scroll-container').offsetHeight;
    // const sections = document.querySelectorAll('.section');
    const home = document.querySelector('.home');
    const viewportHeight = window.innerHeight;
  
    // sections.forEach(section => {
    //   (section as HTMLElement).style.height = `${viewportHeight - navbarHeight}px`;
    // });

    (home as HTMLElement).style.height = `${viewportHeight - navbarHeight}px`;
    (home as HTMLElement).style.marginTop = `${navbarHeight}px`;

  }
  
  // Adjust height on page load and window resize
  window.addEventListener('load', adjustSectionHeight);
  window.addEventListener('resize', adjustSectionHeight);
  
  return (
    <>
    <Nav />
    <div className="overflow-hidden">
    <div className="main-container flex flex-col justify-between items-center gap-28">
      <div className="section home flex flex-col justify-center">
        <Scroller />
        <div className="font-evie text-xl tracking-wider ml-1">
          &lt;&gt; Digital producer &lt;&gt; Full-stack developer &lt;&gt; Eye-catching websites and useful web tools &lt;&gt;
        </div>
      </div>
      <div id="about" className="section about flex flex-col gap-14 justify-center w-full">
        <About />
      </div>
      <div id="portfolio" className="section portfolio flex flex-col w-11/12">
        <Portfolio />
      </div>
    </div>
    </div>
    </>
  );
}
