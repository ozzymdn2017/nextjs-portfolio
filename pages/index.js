import Link from 'next/link'
import  Image  from 'next/image'
import { motion } from 'framer-motion'


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

export default function Home() {
  return (
    <motion.div className="grid place-items-center relative min-h-screen"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >      
      <section className="p-6 rounded space-y-8 grid md:grid-cols-3 md:gap-4 max-w-7xl lg:p-0">
        <div className="uppercase tracking-tight font-fancy relative md:col-start-1 md:col-end-4">
          <h1 className="text-5xl font-extrabold leading-9 md:text-7xl">Oswaldo Medina</h1>
          <h3 className="text-2xl font-bold md:text-5xl md:ml-1">Jamstack Web Developer</h3>
        </div>
        
        <p className="leading-6 text-grey-500 font-semibold text-xl md:text-3xl md:col-span-3">I create smooth, performant, eye-catching web applications that increase brand value and online outreach.</p>
        <div className="flex gap-4 font-fancy md:col-span-full z-30">
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            <Link href="/projects">
              <a>My Projects</a>
            </Link>
          </motion.button>
          
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            <Link href="/contact">
              <a>Get In Touch</a>
            </Link>
          </motion.button>
        </div>
      </section>
      <div className="absolute bottom-0 opacity-40 h-64 w-64 md:bottom-10 md:right-10 md:h-96 md:w-96">
        <Image 
        src='/developer.svg'
        alt='Coding developer'
        layout="fill"
        />
      </div>
      
    </motion.div>
  )
}
