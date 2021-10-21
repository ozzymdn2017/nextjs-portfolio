import { motion } from 'framer-motion'

import {
  InboxInIcon,
} from '@heroicons/react/outline'

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

export default function contact() {
  return (
    <motion.div className="grid place-content-center space-y-10"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-7xl text-center font-fancy uppercase tracking-tighter">Get In Touch</h1>
      <div className="flex justify-center">
        <InboxInIcon height={32} width={32}/>
        <p className="uppercase text-2xl">: oamedina1994@gmail.com </p>
      </div>
    </motion.div>
  )
}
