import Link from 'next/link'
import  Image  from 'next/image'
import { Transition } from '@headlessui/react'



export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen">      
      <Transition
        appear={true}
        show      
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-450"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <section className="p-8 rounded space-y-8">
          <div className="uppercase tracking-tight font-fancy relative">
            <h1 className="text-4xl font-extrabold leading-6 md:text-5xl">Oswaldo Medina</h1>
            <h3 className="text-2xl font-bold text-blue-600 md:text-3xl">Frontend Developer</h3>
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
      </Transition>
    </div>
  )
}
