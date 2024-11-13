"use client";

import { useRef, useState } from "react";
import Image from 'next/image'

export default function Scroller() {
  const scrollerRef = useRef(null);
  const [isFixed] = useState(false);

  // Once the scroller element touches / intersects with the nav at -40px, 

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         setIsFixed(entry.isIntersecting);
  //         // entry.target.classList.toggle("fix-to-nav", entry.isIntersecting);
  //       });
  //     },
  //     { rootMargin: `-40px 0px 0px 0px`,
  //       threshold: [0, 1] // Adjust threshold to make it less sensitive
  //      }
      
  //   );

  //   if (scrollerRef.current) {
  //     observer.observe(scrollerRef.current);
  //   }

  //   return () => {
  //     if (scrollerRef.current) {
  //       observer.unobserve(scrollerRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div ref={scrollerRef} className={`scroll-container ${isFixed ? 'fix-to-nav' : ''}`}>
      <div className={`scroll-content flex w-auto h-full`}>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
        <Image className={`${isFixed ? 'small-scroll-img' : 'large-scroll-img'}`} src="/images/katy-thompson.svg" alt="Katy Thompson Scrolling Image" width={2000} height={100}/>
      </div>
    </div>
  )
}

// I think there's something going on with the use effect, it's switching state continuously
