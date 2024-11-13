"use client";

import Image from "next/image";
import Link from "next/link";
import portfolio from "../data/portfolio.json";
import {ArrowRightIcon} from '@heroicons/react/24/outline';

export default function Portfolio() {
  return (
    <>
      <h2 className="uppercase font-evie font-medium text-left mb-10">
        Portfolio
      </h2>
      <div className="portfolio-tiles flex gap-12 flex-wrap justify-center">
        {portfolio.map((project) => (
          <div className="w-full | md:w-5/12" key={project.id}>
            <Link className="flex flex-col items-start space-y-6 mb-4" href={project.slug}>
              <div
                className="relative overflow-hidden w-full rounded-lg border border-black"
                style={{ paddingTop: "66%" }}
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full"
                  alt="test"
                  src={`/images/${project.images[0].image}`}
                  width={Number(project.images[0].width)}
                  height={Number(project.images[0].height)}
                  style={{ objectFit: "cover", objectPosition: "left top" }}
                ></Image>
              </div>
            </Link>
            <h3 className="font-evie">{project.name}</h3>
            <div className="font-evie text-sm mb-4">
              {project.shortDescription}
            </div>
            <Link href={`/${project.slug}`}>
              <button className="bg-white border font-evie uppercase font-medium border-black rounded-md px-4 py-1 flex gap-2 items-center">Read more <ArrowRightIcon className="w-4 md:w-5 hover:translate-x-1"/></button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /* <div className="flex border-t border-black">
<div className="portfolio-items border-r border-black font-medium bg-white uppercase font-evie">
  {portfolio.map((project) => (
    <div key={project.id} onClick={() => handleSetActive(project.id)} className="portfolio-item border-b py-10 px-4 border-black flex items-center hover:bg-slate-200 cursor-pointer">{project.name}</div>
  ))}
</div>
<div className="portfolio-content flex flex-col">
  <div className="project-image">
    {activeProject.image}
    <div className="project-tech-stack flex justify-end items-end">
      {activeProject.techStack?.map((tech) => (
        <div key={tech} className="project-tech-item min-h-16 w-24 px-2 flex items-center bg-white/50 ">
          <Image src={`/techstack/${stackLogos[tech]}`} alt={tech} className="object-contain" width={100} height={100}/>
        </div>
      ))}
    </div>
  </div>
  <div className="project-details bg-[var(--background)] font-evie py-4 px-6 border-t border-b border-black flex">
    <div className="github mr-4">{activeProject.github != null ? (<Link href={activeProject.github}><Image src="/icons/github.svg" alt="See GitHub respository" width={30} height={30}></Image></Link>) : ""}</div>
    <div className="project-description flex-1">{activeProject.description}</div>
  </div>
</div>
</div> */
}
