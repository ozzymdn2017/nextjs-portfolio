import Link from 'next/link'
import Image from 'next/image'


const projects = [
  {
    id: 1,
    name: 'Jet & Jax Photography',
    tech: ['Next.js', 'TailwindCSS', 'HeadlessUI', 'AWS Amplify', 'GraphQL'],
    description: 'Photography website created in order to increase online exposure and provide a space for displaying client work.',
    imageSrc: '/palms.jpg',
    alt: 'Palms'
  },
  {
    id: 2,
    name: 'El Gato Auto Repair and Exhaust',
    tech: ['Next.js', 'GSAP', 'AWS Amplify'],
    description: 'Auto Repair and Exhaust shop website in order to increase online exposure and give generalized information regarding car maintenance and pricing',
    imageSrc: '/oils.jpg',
    alt: 'Oil'
  },
]

export default function ProjectPage() {
  return (
    <div className="bg-blue-500/50">
      <h1 className="text-6xl font-extrabold pl-4 text-gray-100 mt-6 font-fancy">Projects</h1>
      {projects.map((project) => 
        <section key={project.id} className="my-8 grid grid-cols-12 relative text-gray-100 p-4">
          <div className="col-span-8 filter contrast-75 rounded-2xl relative aspect-w-3 aspect-h-4">
            <Image src={project.imageSrc}  alt={project.alt} layout="fill" quality={65} />
          </div> 
          <h3 className="text-2xl z-10 font-bold leading-5 col-start-9 col-end-13 -ml-8 font-fancy">{project.name}</h3>
          <p className="col-span-full text-xl tracking-tight leading-8 my-4">{project.description}</p>
        </section>
      )}
    </div>
  )
}
