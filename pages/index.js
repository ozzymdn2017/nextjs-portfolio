import Link from 'next/link'
import  Image  from 'next/image'
import { motion } from 'framer-motion'


const variants = {
  hidden: { opacity: 0, x:-100},
  enter: { opacity: 1, x:0},
  exit: { opacity: 0, x:0}
}

export default function Home() {
  return (
    <motion.div className="grid place-items-center min-h-screen"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >      
        <section className="p-8 rounded space-y-8">
          <div className="uppercase tracking-tight font-fancy relative">
            <h1 className="text-4xl font-extrabold leading-6 md:text-5xl">Oswaldo Medina</h1>
            <h3 className="text-2xl font-bold md:text-3xl">Frontend Developer</h3>
          </div>
         
          <p className="leading-6 text-grey-500 font-semibold text-xl md:text-2xl">I create smooth, performant, eye-catching web applications that increase brand value and online outreach.</p>
          <div className="flex gap-4 font-fancy">
            <button>
              <Link href="/projects">
                <a>My Projects</a>
              </Link>
            </button>
            
            <button>
              <Link href="/contact">
                <a>Get In Touch</a>
              </Link>
            </button>
          </div>
        </section>
    </motion.div>
  )
}
