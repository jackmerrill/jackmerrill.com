import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Logo from './Images/Logo';

const Navbar = ({ links }: {
    links: {
        label: string;
        href: string;
    }[]
}) => {
    const [collapsed, setCollapsed] = useState(false);

    const [atTop, setAtTop] = useState<boolean>()

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
        })
    })

    return (
      <nav className={`fixed w-full flex flex-wrap items-center justify-between px-2 py-6 navbar-expand-lg bg-gray-800 ${atTop ? '' : 'shadow-md'}`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start items-center">
            <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white">
              <Link href="/" aria-label="Stryx Logo">
                <h1 className="text-white font-extrabold text-2xl">Jack Merrill</h1>
              </Link>
            </div>
            <button className="md:hidden text-gray-500 w-10 h-10 relative focus:outline-none" onClick={() => setCollapsed(!collapsed)}>
                <span className="sr-only">Open menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${ !collapsed ? 'rotate-45' : '-translate-y-1.5' }`} />
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${ !collapsed && 'opacity-0'}`} ></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${ !collapsed ? '-rotate-45' : 'translate-y-1.5' }`} ></span>
                </div>
            </button>
          </div>
          <div className={collapsed ? 'md:flex flex-grow items-center hidden' : 'md:flex flex-grow items-center'} id="navbar">
            <ul className="flex flex-col md:flex-row list-none ml-auto items-center">
              {links.map(({ label, href }) => (
                <li className="nav-item">
                  <div className="px-3 py-2 flex items-center leading-snug text-white">
                    <Link href={href} passHref>
                        <a
                            className="font-bold text-gray-200 hover:underline"
                        >
                            {label}
                        </a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )  
}

export default Navbar;