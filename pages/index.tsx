import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react'
import CodeIcon from '../components/Images/CodeIcon'
import DesignIcon from '../components/Images/DesignIcon'
import GitHubIcon from '../components/Images/GitHubIcon';
import MailIcon from '../components/Images/MailIcon';
import TwitterIcon from '../components/Images/TwitterIcon';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import useOnScreen from '../util/hooks/useOnScreen';

const Graphics = [
  {
    name: 'Personal Logo',
    src: '/img/designs/NewPersonalLogo.png',
  },
  {
    name: 'Old Personal Logo',
    src: '/img/designs/PersonalLogo.png',
  },
  {
    name: 'Demo App Icon',
    src: '/img/designs/AppIcon.png',
  },
  {
    name: 'Stryx Logo',
    src: '/img/designs/Stryx.png',
  },
  {
    name: 'Isometric Building',
    src: '/img/designs/IsometricBuilding.png',
  },
  {
    name: 'AmusedGrape Icon',
    src: '/img/designs/Grape.png',
  },
  {
    name: 'New Stryx Icon',
    src: '/img/designs/StryxNew.png',
  },
  {
    name: 'Nyxx Logo',
    src: '/img/designs/Nyxx.png',
  },
  {
    name: 'Lunar Design Logo',
    src: '/img/designs/LunarDesign.png',
  },
];

const IndexPage = () => {
  const [timeString, setTimeString] = useState(
    (new Date().getHours() < 12 ? 'Morning' : (new Date().getHours() >= 12 && new Date().getHours() <= 17 ? 'Afternoon' : (new Date().getHours() >= 17 && new Date().getHours() <= 24 ? 'Evening' : 'Morning')))
  )

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const graphicsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const viewingHome = useOnScreen(homeRef)
  const viewingAbout = useOnScreen(aboutRef)
  const viewingGraphics = useOnScreen(graphicsRef)
  const viewingProjects = useOnScreen(projectsRef)
  const viewingContact = useOnScreen(contactRef)

  useEffect(() => {
    const hours = new Date().getHours()

    console.log(new Date())
  
    if (hours < 12) {
      setTimeString('Morning')
    } else if (hours >= 12 && hours <= 17) {
      setTimeString('Afternoon')
    } else if (hours >= 17 && hours <= 24) {
      setTimeString('Evening')
    }
  })

  function calculateAge() {
    var ageDifMs = Date.now() - new Date('July 13, 2004').getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <>
      <Head>
        <meta name='description' content='Graphic Designer and Fullstack Developer.' />
      </Head>
      <Navbar views={[
        { view: 'Home', viewing: viewingHome },
        { view: 'About', viewing: viewingAbout },
        { view: 'Projects', viewing: viewingProjects },
        { view: 'Graphics', viewing: viewingGraphics },
        { view: 'Contact', viewing: viewingContact },
      ]} />
      <header className="flex flex-col flex-wrap items-center justify-center w-full h-screen space-y-2 overflow-hidden lg:px-36" ref={homeRef}>
        <div className="w-full px-3 my-3 text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-6xl">Good <span>{timeString}</span>! I&apos;m <span>Jack Merrill</span>.</h1>
        </div>
        <div className="w-full px-3 my-3 text-center">
          <h2 className="text-2xl font-bold text-white md:text-4xl">A {calculateAge()} year old Graphic and UI Designer and Fullstack Developer from the Windy City.</h2>
        </div>
        <div className="inline-flex flex-wrap items-center content-center justify-center w-full px-3 pt-4 my-3 space-y-4 text-center md:space-y-0 md:space-x-4">
          <Link href="#projects">
            <a className="w-full px-4 py-2 font-bold text-white truncate transition duration-150 border border-white hover:bg-white hover:text-black rounded-xl md:w-1/6">
              See my Work
            </a>
          </Link>
          <span className="hidden text-sm font-light text-white md:block">or</span>
          <Link href="mailto:me@jackmerrill.com">
            <a className="w-full px-4 py-2 font-bold text-white transition duration-150 border border-white hover:bg-white hover:text-black rounded-xl md:w-1/6">
              Contact Me
            </a>
          </Link>
        </div>
      </header>
      <div ref={aboutRef} id="about">
        <Skills />
      </div>
      <div id='projects' ref={projectsRef}>
        <Projects />
      </div>
      
      <div id='graphics' className='flex flex-wrap justify-center px-12 pt-24 space-y-3 lg:px-64' ref={graphicsRef}>
        <h1 className='w-full text-3xl font-bold text-center text-white'>My Designs</h1>
        <p className='w-full text-xl font-semibold text-center text-white'>Here are a few designs I&apos;ve made!</p>
        <div className="flex flex-wrap justify-center w-full -mx-1 overflow-hidden">
          <div className="flex flex-wrap -mx-3 overflow-hidden">
            {Graphics.map((gfx) => (
              <div className="w-1/2 px-3 my-3 overflow-hidden md:w-1/3">
                <Image alt={gfx.name} width='1080px' height='1080px' src={gfx.src} className='rounded-xl' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id='contact' className='flex flex-wrap justify-center p-12 space-y-4' ref={contactRef}>
        <h1 className='text-3xl font-bold text-white'>Want to contact me?</h1>
        <div className='flex justify-center w-full align-middle'>
          <a
            href='https://github.com/jackmerrill'
            target='_blank'
            className='flex items-center justify-center w-11/12 px-10 py-4 text-xl font-bold text-white lg:w-1/4 bg-github rounded-xl'
            rel='noreferrer'
          >
            <GitHubIcon className='w-6 h-6 mr-3 text-white'/>
            GitHub Profile
          </a>
        </div>
        <div className='flex justify-center w-full align-middle'>
          <a
            href='mailto:me@jackmerrill.com'
            target='_blank'
            className='flex items-center justify-center w-11/12 px-10 py-4 text-xl font-bold text-white bg-gray-900 lg:w-1/4 rounded-xl'
            rel='noreferrer'
          >
            <MailIcon className='w-6 h-6 mr-3 text-white'/>
            Email
          </a>
        </div>
        <div className='flex justify-center w-full align-middle'>
          <a
            href='https://twitter.com/jack__merrill'
            target='_blank'
            className='flex items-center justify-center w-11/12 px-10 py-4 text-xl font-bold text-white lg:w-1/4 bg-twitter rounded-xl'
            rel='noreferrer'
          >
            <TwitterIcon className='w-6 h-6 mr-3 text-white'/>
            Twitter
          </a>
        </div>
      </div>

    </>
  )
}

export default IndexPage
