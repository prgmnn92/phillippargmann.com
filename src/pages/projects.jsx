import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import euphoria from '@/images/logos/euphoria.png'
import culcha from '@/images/logos/culcha.png'
import sangfroid from '@/images/logos/sangfroid.png'
import parq from '@/images/logos/parq.png'
import kriptos from '@/images/logos/kriptos.png'
import femlove from '@/images/logos/femlove.png'

const projects = [
  {
    name: 'Femlove',
    description:
      'A website that helps women improve their health and wellbeing. Using Next.js and Sanity as the CMS, I made sure that the site is fast, easy to use, and full of valuable content. ',
    link: { href: 'https://femlove.blog/', label: 'femlove.blog' },
    logo: femlove,
  },
  {
    name: 'Sangfroid Studio',
    description:
      'Sangfroid Studio is a creative agency that helps businesses tell their stories through branding, design, and marketing. Using Webflow, I built a website that showcases their amazing work and captures their unique style.',
    link: {
      href: 'https://sangfroidstudio.com/',
      label: 'sangfroidstudio.com',
    },
    logo: sangfroid,
  },
  {
    name: 'Culcha',
    description:
      "With Webflow, I created a website that's easy to navigate and showcases their expertise.",
    link: { href: 'https://www.culcha.com/', label: 'culcha.com' },
    logo: culcha,
  },
  {
    name: 'PARQ',
    description:
      "Using my web development skills, I helped create a website that's user-friendly and clearly communicates the benefits of Parq's services.",
    link: { href: 'https://www.parqhq.com/', label: 'parqhq.com' },
    logo: parq,
  },
  {
    name: 'Euphoria Fest',
    description:
      'I created a website that captures the energy and excitement of the festival.',
    link: { href: 'https://www.euphoriafest.com/', label: 'euphoriafest.com' },
    logo: euphoria,
  },
  {
    name: 'Kriptos',
    description:
      'Kriptos was one of my first projects and a great learning experience! I had the opportunity to work with this innovative tech startup and build their website from scratch.',
    link: { href: 'https://www.kriptos.io/', label: 'kriptos.io' },
    logo: kriptos,
  },
]

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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Phillip Pargmann</title>
        <meta
          name="description"
          content="Things I've made. Exploring the Intersection of Tech and Creativity"
        />
      </Head>
      <SimpleLayout
        title="Things I've made. Exploring the Intersection of Tech and Creativity"
        intro="Here you'll some of my latest and greatest creations, spanning everything from programming and electronics to web development and beyond. As a lifelong learner and tinkerer, I'm always exploring new ideas and pushing the boundaries of what's possible. I hope you enjoy browsing through my projects and seeing the creative ways that technology can be used to solve problems and bring ideas to life."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
