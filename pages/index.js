import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="grid min-h-screen bg-gradient-radial from-green-300 via-blue-400 to-green-500 animate-gradient-xy place-items-center">
      <Head> 
        <title>Ozzy Em Web Development</title>
        <meta name="description" content="Website Design and Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 rounded bg-gray-100 mx-auto space-y-5">
        <h1 className="text-5xl font-bold leading-10">Ozzy Medina Frontend Web Developer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quas atque magni et iste libero, ab quos sapiente harum labore incidunt dicta officiis illo nemo.</p>
        <div className="flex gap-4">
          <button>
            <Link href="#">
              <a>See Our Work</a>
            </Link>
          </button>
          
          <button>
            <Link href="#">
              <a>Work With Us</a>
            </Link>
          </button>
        </div>
      </main>
    </div>
  )
}
