import '../styles/globals.css'
import Layout from '../components/Layout.js'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
      >
        <Component {...pageProps}/>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
