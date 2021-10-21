import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'


const projects = [
  {
    id: 1,
    name: 'Jet & Jax Photography',
    tech: ['Next.js', 'TailwindCSS', 'HeadlessUI', 'AWS Amplify', 'GraphQL'],
    description: 'Photography website created in order to increase online exposure and provide a space for displaying client work.',
    imageSrc: '/lens.jpg',
    alt: 'Camera lens with reflection of Neon shapes',
    github: '#',
    website: '#'
  },
  {
    id: 2,
    name: 'El Gato Auto Repair',
    tech: ['Next.js', 'GSAP', 'AWS Amplify'],
    description: 'Auto Repair and Exhaust shop website in order to increase online exposure and give generalized information regarding car maintenance and pricing',
    imageSrc: '/bmw-lifts.jpg',
    alt: 'BMWs in auto repair garage',
    github: '#',
    website: '#'
  },
]

const variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
  },
  visible: { 
    opacity: 1, 
    y: 0,
  },
  exit: { 
    opacity: 0, 
    y: -100
  },
}

export default function ProjectPage() {
  return (
    <motion.div className="relative max-w-7xl"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-6xl font-extrabold pl-4 mt-6 font-fancy md:pl-6 lg:pl-0">Projects</h1>
      {projects.map((project) => 
        <section key={project.id} className="my-12 grid grid-cols-12 relative">
          <div className="col-start-1 col-end-9 filter contrast-150 rounded-2xl aspect-w-3 aspect-h-4">
            <Image src={project.imageSrc}  alt={project.alt} layout="fill" quality={65} />
          </div>
          <h3 className="text-3xl z-10 font-bold leading-8 col-start-9 col-end-13 -ml-20 mt-16 font-fancy text-gray-100 md:text-5xl">{project.name}</h3>
          <p className="col-span-full text-2xl tracking-tight leading-8 my-4 px-4 md:px-6 lg:pl-0">{project.description}</p>
          <div className="flex place-items-center col-span-full place-content-around px-4">
            <Link href={project.github}>
              <a className=" h-12 w-12 text-gray-900 hover:text-gray-800 z-20">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </Link>
            <Link href={project.github}>
              <a className="h-12 w-12 text-gray-900 hover:text-gray-800 z-20">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </Link>
          </div>
        </section>
      )}
    </motion.div>
  )
}
