import Image from 'next/image'
import Link from 'next/link'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BriefcaseIcon,
  IdentificationIcon,
  MenuIcon,
  InboxInIcon,
  XIcon,
} from '@heroicons/react/outline'


const navItems = [
  {
    name: 'My Work',
    description: 'Browse through some of my projects!',
    href: '/projects',
    icon: BriefcaseIcon,
  },
  {
    name: 'About Me',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/about',
    icon: IdentificationIcon,
  },
  {
    name: 'Contact Me',
    description: "Connect with third-party tools that you're already using.",
    href: '/contact',
    icon: InboxInIcon,
  },
]




export default function Header() {
  return (
    <Popover className="relative z-20">
    <div className="max-w-7xl mx-auto px-4 lg:p-0 sm:px-6">
      <div className="flex justify-between items-center py-6 md:justify-between">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="font-bold font-fancy text-4xl text-gray-800 hover:text-blue-400">
              Ozzy Em
            </a>
          </Link>
          
        </div>
        
        <div className="md:hidden">
          <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <ul className="hidden text-2xl space-x-2 md:flex font-semibold font-fancy text-blue-500">
          <li>
            <Link href="/projects"><a className="hover:text-gray-800">Projects</a></Link>
          </li>
          <li>
            <Link href="/about"><a className="hover:text-gray-800">About</a></Link>
          </li>
          <li>
            <Link href="/contact"><a className="hover:text-gray-800">Contact</a></Link>
          </li>
        </ul>
        
      </div>
    </div>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-100">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
              <Link href="/">
                <a className="font-bold font-fancy text-4xl text-gray-800">
                  Ozzy Em
                </a>
              </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-blue-500 rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navItems.map((item) => (
                  <Link href={item.href}  key={item.name}>
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <item.icon className="flex-shrink-0 h-6 w-6 text-blue-500" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                  </a>
                </Link>
                ))}
              </nav>
            </div>
          </div>
          
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}
