import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x:-100},
  enter: { opacity: 1, x:0},
  exit: { opacity: 0, x:0}
}

export default function about() {
  return (
    <motion.div className="grid place-content-center p-4 max-w-7xl"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <h1 className="text-7xl mb-4 font-fancy font-bold">About Me</h1>
      <p className="text-2xl font-light">Hello! My name is Ozzy and I work with React and Vue frontend frameworks and their derivatives such as Next.js and Nuxt. For 3D or javascript animations, Three.js and GSAP are my favorite tools to tinker with and make projects come alive. </p>
    </motion.div>
  )
}
