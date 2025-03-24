import { projects } from '@/lib/projects'
import Hero from './_components/Hero'
import Project from './_components/Project'
import ProjectsSnip from './_components/ProjectsSnip'
import Skills from './_components/Skills'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='mb-20'>
      <Hero />
      
      <div className="text-center mb-0 mt-7">
        <h1 className="text-2xl font-bold">Skills<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of the skills I developed<br /> through my programming journey<span className="text-primary">.</span></p>
      </div>
      
      <Skills />
      
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">Projects<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of the projects I built<br /> along the way<span className="text-primary">.</span></p>
      </div>
      
      <div className='flex gap-4 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5'>
        <Project {...projects[0]} />
        <Project {...projects[1]} />
        <Project {...projects[2]} />
        {/* <Project {...projects[3]} /> */}
      </div>

      <div className='grid place-content-center mt-10'>
        <Button asChild variant="secondary"><Link href="/projects">View All Projects</Link></Button>
      </div>
    </main>
  )
}
