import projects from "../../data/portfolio.json";
import Image from "next/image";
import Link from "next/link";
import css from "../../../public/techstack/css.svg";
import type { StaticImageData } from "next/image";
import express from "../../../public/techstack/express.png";
import handlebars from "../../../public/techstack/handlebars.webp";
import html from "../../../public/techstack/html.png";
import hydrogen from "../../../public/techstack/hydrogen.png";
import javascript from "../../../public/techstack/javascript.png";
import jquery from "../../../public/techstack/jquery.svg";
import mongodb from "../../../public/techstack/mongodb.webp";
import mysql from "../../../public/techstack/mysql.png";
import nodejs from "../../../public/techstack/nodejs.svg";
import react from "../../../public/techstack/react.png";
import remix from "../../../public/techstack/remix.svg";
import shopify from "../../../public/techstack/shopify.svg";
import polaris from "../../../public/techstack/shopify-polaris.png";
import graphql from "../../../public/techstack/graphql.png";
import github from "../../../public/icons/github.svg";

const stackLogos: { [key: string]: StaticImageData } = {
  Shopify: shopify,
  CSS: css,
  "Express.js": express,
  "Handlebars.js": handlebars,
  GraphQL: graphql,
  HTML: html,
  Hydrogen: hydrogen,
  Javascript: javascript,
  jQuery: jquery,
  MongoDB: mongodb,
  MySQL: mysql,
  "Node.js": nodejs,
  Polaris: polaris,
  React: react,
  Remix: remix,
};

// Return a list of `params` to populate the [projectSlug] dynamic segment
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectSlug: project.slug,
  }));
}

type Props = {
  params: Promise<{ projectSlug: string }>;
};

export default async function Page({ params }: Props) {
  const { projectSlug } = await params;

  const project = await projects.find(
    (project) => project.slug === projectSlug
  );

  return (
    <div className="parentContainer flex items-center justify-center mt-28">
      <div className="projectContainer font-evie flex flex-col items-start gap-8 w-9/12">
        <div className="flex justify-between gap-4 w-full">
          <div className="w-full sm:w-8/12">
            <h1>{project?.name}</h1>
          </div>
          {project?.github ? (
            <div className="project-github w-4/12 flex justify-end items-end gap-3">
              <p className="text-lg">Project Github:</p>
              <Link href={project.github} target="_blank"><Image src={github} alt="Project GitHub" className="w-9 h-9"></Image></Link>
            </div>
            ) : null}
        </div>
        <section className="project-section">
          <div className="project-tech-stack">
            {project?.techStack?.map((tech: string) => (
              <div key={tech} className="project-tech-item flex">
                <Image
                  key={tech}
                  src={stackLogos[tech]}
                  alt={tech}
                  className="w-28 max-h-28"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="project-section">
          <div className="project-images">
            <Image
              className="project-image-ref"
              src={`/images/${project?.images[0].image}`}
              width={Number(project?.images[0].width)}
              height={Number(project?.images[0].height)}
              alt={project?.images[0].alt || "Project image"}
            />
            <p className="project-image-caption">{project?.images[0].alt}</p>
          </div>
          <div className="project-text">
            <div className="project-text-section">
              <h3>Overview</h3>
              <div className="projectOverview">
                {project?.overview.map((p, index) => {
                  return (
                    <div className="mb-4" key={index}>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-text-section">
              <h3>Project Purpose and Goal</h3>
              <div className="projectPurposeGoal">
                {project?.purposeGoal.map((p, index) => {
                  return (
                    <div className="mb-4" key={index}>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="project-text">
            <div className="project-text-section">
              <h3>Web Stack and Explanation</h3>
              <div className="projectStackExplanation">
                {project?.stackExplanation.map((p, index) => {
                  return (
                    <div className="mb-4" key={index}>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-text-section">
              <h3>Challenges and Process</h3>
              <div className="projectThoughtProcess">
                {project?.problemsThoughtProcess.map((p, index) => {
                  return (
                    <div className="mb-4" key={index}>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-text-section">
              <h3>Lessons Learned</h3>
              <div className="projectLessons">
                {project?.lessons.map((p, index) => {
                  return (
                    <div className="mb-4" key={index}>
                      {p}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="project-images flex flex-col gap-10">
            {project?.images?.length ?? 0 > 1 ? (
              <>
            {project?.images.slice(1).map((img, index) => (
              <div key={index} className="project-image">
                <Image
                  className="project-image-ref"
                  src={`/images/${img.image}`}
                  width={Number(img.width)}
                  height={Number(img.height)}
                  alt={project?.name || "Project image"}
                />
                <p className="project-image-caption">{img.alt}</p>
              </div>
            ))}
              </>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
