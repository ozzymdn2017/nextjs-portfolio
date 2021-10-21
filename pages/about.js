import { motion } from 'framer-motion'

const variants = {
  hidden: { 
    opacity: 0, 
    y: 100
  },
  visible: { 
    opacity: 1, 
    y: 0
  },
  exit: { 
    opacity: 0, 
    y: -100
  },
}

export default function about() {
  return (
    <motion.div className="grid place-content-center px-4 max-w-7xl md:mx-6 md:px-0 lg:p-0"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-7xl mb-4 font-fancy font-semibold">About Me</h1>
      <p className="text-2xl md:text-4xl font-light">Hello! My name is Ozzy and I work with React and Vue frontend frameworks and their derivatives such as Next.js and Nuxt. For 3D or javascript animations, Three.js and GSAP are my favorite tools to tinker with and make projects come alive. </p>
    </motion.div>
  )
}
