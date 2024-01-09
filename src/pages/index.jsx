/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  UpworkIcon,
} from "@/components/SocialIcons"
import { projects, personalProjects } from "../lib/projects"
import Testimonials from "@/components/Testimonials"

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip Pargmann - Freelance Front-End Webdeveloper</title>
        <meta
          name="description"
          content="As a freelance web developer, I'm passionate about finding innovative solutions to technical problems and expanding my skillset. I thrive on learning new things and delivering top-notch customer service to my clients. Whether it's fixing bugs or brainstorming new ideas, I'm always up for a challenge!"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Front-end web developer, JavaScript, React.js & Webflow Expert
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            As a freelance Front-end webdeveloper, I'm passionate about finding
            solutions to technical problems and expanding my skillset. I thrive
            on learning new things and delivering top-notch customer service to
            my clients.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href="https://www.upwork.com/freelancers/phillippargmann"
              aria-label="Hire me on upwork"
              icon={UpworkIcon}
            />
            <SocialLink
              href="https://twitter.com/PargmannPhillip"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/prgmnn92"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/phillip-pargmann-3810811b4/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div id="projects">
          <div className="pt-24 sm:pt-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">
                  Client Projects
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                  See What I've Built
                </p>
              </div>
              <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {projects.map((project) => (
                    <Card as="li" key={project.name}>
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-md dark:bg-white shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
                        <Image
                          src={project.logo}
                          alt=""
                          className="w-8 h-8"
                          unoptimized
                        />
                      </div>
                      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Card.Link href={project.link.href}>
                          {project.name}
                        </Card.Link>
                      </h2>
                      <Card.Description>{project.description}</Card.Description>
                      <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                        <LinkIcon className="flex-none w-6 h-6" />
                        <span className="ml-2">{project.link.label}</span>
                      </p>
                    </Card>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container>
        <div>
          <div className="pt-24 sm:pt-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">
                  Personal Projects
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                  What I Do in My Free Time
                </p>
              </div>
              <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {personalProjects.map((project) => (
                    <Card as="li" key={project.name}>
                      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <Card.Link target="_blank" href={project.link.href}>
                          {project.name}
                        </Card.Link>
                      </h2>
                      <Card.Description>{project.description}</Card.Description>
                      <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                        <LinkIcon className="flex-none w-6 h-6" />
                        <span className="ml-2">{project.link.label}</span>
                      </p>
                    </Card>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container>
        <Testimonials />
      </Container>
    </>
  )
}
