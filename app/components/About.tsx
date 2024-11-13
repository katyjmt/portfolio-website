import Link from "next/link";
import Image from "next/image";
import BrandBar from "./BrandBar";

export default function About() {
  return (
    <div className="about">
      <h2 className="uppercase font-evie font-medium text-left mb-10">
        Hi, I&apos;m Katy
      </h2>      
      <div className="about-content font-evie flex flex-col gap-4 w-11/12 m-auto">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
          <div className="intro basis-3/12 flex flex-col gap-8">
            <Image
              src="/images/katy.png"
              alt="Photo of Katy"
              className="object-cover h-full w-full border border-black rounded-lg basis-6/12"
              width={998}
              height={1331}
            />
            <BrandBar />
          </div>
          <div className="about-text font-evie text-base basis-9/12 flex-grow bg-white/50 p-10 border border-black rounded-lg">
            {/* <h2 className="text-5xl uppercase font-medium font-evieCondensed pb-4">Welcome!</h2> */}
            <p className="py-3">
              Hi, I&apos;m Katy. I love coding and making things. I&apos;m happiest when I&apos;m
              learning new skills, sharing ideas and working out how to make
              complex things feel simple. I recently completed a 6-month coding
              bootcamp at Monash University, graduating with a 94% average. I&apos;m
              now looking to transition into a developer role where I can put my
              passion for coding to good use and support a team and organisation
              on working towards their goals.
            </p>
            <p className="py-3">
              Despite being a recent bootcamp grad, I&apos;ve been working in tech
              since 2016, in roles focused on digital production, strategy, and
              data analytics. Throughout my career, I&apos;ve regularly found
              opportunities to code and contribute to technical projects. I&apos;ve
              styled dozens of websites, built dashboards, and taught myself MySQL
              to query and analyse data—all while working closely with talented
              developers and designers who&apos;ve raised my standards for what&apos;s
              expected of quality web applications.
            </p>
            <p className="py-3">
              My experience as a senior digital producer has also given me a
              unique understanding of user needs, informed by in-depth user
              research and effective communication with clients and stakeholders.
              This background has made me skilled in balancing technical, design,
              and business requirements, ensuring that projects meet both user and
              client expectations.
            </p>
            <p className="py-3">
              Outside of work, I also have a side-business, PLANNER.STUDIO, where
              I sell customisable desk planners. I&apos;m currently in the final stages
              of building a Remix / React-based web-app to support the
              customisation process, which will let customers choose a date range
              for their planner, browse and select from a range of page layouts,
              then review a digital version of what will be printed and sent to
              them once they purchase. I&apos;ve also built a custom Shopify admin app
              to support the upload and management of page layouts in the
              back-end.
            </p>
            <p className="pt-3">
              <span className="font-medium uppercase">Fun fact:</span> I created
              the typeface used throughout this website. It&apos;s called{" "}
              <Link
                className="underline underline-offset-2 font-medium"
                href="https://www.myfonts.com/collections/evie-sans-font-ktstudio"
                target="_blank"
              >
                Evie Sans
              </Link>{" "}
              and I designed it during the COVID lockdown as a custom typeface for
              my PLANNER.STUDIO planners.
            </p>
            {/* <p className="font-medium uppercase">Shopify  &lt;&gt;  Craft CMS  &lt;&gt;  Wordpress  &lt;&gt;  Next.js  &lt;&gt;  Remix &lt;&gt;  MongoDB &lt;&gt;  MySQL &lt;&gt;  GraphQL </p> */}
          </div>
        </div>
        
      </div>
    </div>
  );
}
