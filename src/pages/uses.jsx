/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Phillip Pargmann</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1, 8GB RAM (2020)">
              I love my MacBook Pro with the M1 chip! The battery life is
              amazing and helps me stay focused on my work without worrying
              about running out of power. The M1 chip is so efficient that I can
              get more work done and be more productive throughout the day.
            </Tool>
            <Tool title="Logitech MX Keys">
              I absolutely adore my keyboard! The design and feel of it are just
              perfect. It's so comfortable to type on, and the keys are so
              responsive that I feel like I'm typing on air. I love the way the
              keys are backlit, which makes it easier to type in low-light
              conditions.
            </Tool>
            <Tool title="Logitech MX Master">
              It's comfortable, precise, and has customizable buttons that I can
              program for my most frequently used applications. Overall, the MX
              Master 3 mouse has become an essential tool for me, and I wouldn't
              want to work without it!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Visual Studio Code is the best IDE since sliced bread - it's got a
              plethora of extensions and support for different programming
              languages, and it won't leave crumbs all over your desk!
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="Figma">
              Figma is a fantastic tool for designing user interfaces, thanks to
              its intuitive interface that makes designing projects easy and the
              ability to collaborate with others in real-time. Overall, it's a
              user-friendly and efficient platform that simplifies the design
              process.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
