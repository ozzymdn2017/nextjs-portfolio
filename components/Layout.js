import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 0},
  enter: { opacity: 1, y: 0},
  exit: { opacity: 0, y:-100}
}
 
export default function Layout({children}) {
  return (
    <div>
      <Head> 
        <title>Ozzy Em Web Development</title>
        <meta name="description" content="Website Design and Development" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <motion.main className="min-h-screen grid justify-center bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
        variants={variants}
        initial="hidden"
        animate="enter" 
        exit="exit"
        transition={{type: 'bounce'}}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
