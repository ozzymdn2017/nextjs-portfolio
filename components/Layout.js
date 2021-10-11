import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({children}) {
  return (
    <div>
      <Head> 
        <title>Ozzy Em Web Development</title>
        <meta name="description" content="Website Design and Development" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main className="min-h-screen grid justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
