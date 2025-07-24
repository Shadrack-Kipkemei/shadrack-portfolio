import Hero from '@/components/Hero/page'
import About from '@/components/About/page'
import Projects from '@/components/Projects/page'
import Experience from '@/components/Experience/page'
import Contact from '@/components/Contact/page'


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Contact /> */}
    </>
  )
}