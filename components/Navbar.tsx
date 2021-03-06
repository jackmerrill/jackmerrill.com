import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from '../components/Images/Logo';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Graphics', href: '#graphics', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ views }: { views: { view: string, viewing: boolean }[] }) => {
    const [atTop, setAtTop] = useState<boolean>()

    function updateCurrent() {
      const currentlyViewing = views.find((view) => view.viewing === true)
      navigation.forEach((nav) => nav.current = false)
      if (currentlyViewing) {
        const nav = navigation.find((nav) => nav.name === currentlyViewing.view)
        if (!nav) return
        nav.current = true
      }
    }

    useEffect(() => {
        if (window.scrollY === 0) {
            setAtTop(true)
        } else {
            setAtTop(false)
        }
        window.addEventListener("scroll", () => {
            if (window.scrollY === 0) {
                setAtTop(true)
            } else {
                setAtTop(false)
            }

            updateCurrent()
        })
    })

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 bg-black border-b-2 border-white ${atTop ? '' : 'shadow-lg'}`}>
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Logo className="w-8 h-8" />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        id={item.name + item.href}
                        onClick={() => {
                          updateCurrent()
                        }}
                        className={classNames(
                          item.current
                            ? 'border-2 border-white text-white'
                            : 'text-gray-300 hover:border-gray-300 hover:border-2 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium transition-border duration-75'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )  
}

export default Navbar;