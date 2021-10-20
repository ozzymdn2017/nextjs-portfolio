import '../styles/globals.css'
import Layout from '../components/Layout.js'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0,0)}
      >
        <Component {...pageProps}/>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
