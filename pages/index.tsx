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
      <header className="flex flex-wrap flex-col overflow-hidden space-y-2 lg:px-36 items-center justify-center h-screen w-full" ref={homeRef}>
        <div className="my-3 px-3 w-full text-center">
          <h1 className="text-white font-extrabold md:text-6xl text-3xl">Good <span>{timeString}</span>! I&apos;m <span>Jack Merrill</span>.</h1>
        </div>
        <div className="my-3 px-3 w-full text-center">
          <h2 className="text-white font-bold md:text-4xl text-2xl">A {calculateAge()} year old Graphic and UI Designer and Fullstack Developer from the Windy City.</h2>
        </div>
        <div className="inline-flex flex-wrap md:space-y-0 space-y-4 pt-4 items-center justify-center content-center md:space-x-4 my-3 px-3 w-full text-center">
          <Link href="#projects">
            <a className="border-white border hover:bg-white hover:text-black transition duration-150 px-4 py-2 rounded-xl font-bold text-white md:w-1/6 w-full truncate">
              See my Work
            </a>
          </Link>
          <span className="text-sm font-light text-white md:block hidden">or</span>
          <Link href="mailto:me@jackmerrill.com">
            <a className="border-white border hover:bg-white hover:text-black transition duration-150 px-4 py-2 rounded-xl font-bold text-white md:w-1/6 w-full">
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
      
      <div id='graphics' className='flex flex-wrap justify-center px-12 lg:px-64 pt-24 space-y-3' ref={graphicsRef}>
        <h1 className='w-full font-bold text-white text-center text-3xl'>My Designs</h1>
        <p className='w-full font-semibold text-white text-center text-xl'>Here are a few designs I&apos;ve made!</p>
        <div className="flex flex-wrap w-full -mx-1 overflow-hidden justify-center">
          <div className="flex flex-wrap -mx-3 overflow-hidden">
            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Personal Logo' width='1080px' height='1080px' src='/img/designs/PersonalLogo.png' className='rounded-xl' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Demo App Icon' width='1080px' height='1080px' src='/img/designs/AppIcon.png' className='rounded-xl' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Stryx Logo' width='1080px' height='1080px' src='/img/designs/Stryx.png' className='rounded-xl' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Comet Design' width='1080px' height='1080px' src='/img/designs/Comet.png' className='rounded-xl bg-gray-600' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Isometric Building Design' width='1080px' height='1080px' src='/img/designs/IsometricBuilding.png' className='rounded-xl' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Grape Logo' width='1080px' height='1080px' src='/img/designs/Grape.png' className='rounded-xl' />
            </div>

            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='New Stryx Logo' width='1080px' height='1080px' src='/img/designs/StryxNew.png' className='rounded-xl' />
            </div>
            
            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Nyxx Logo' width='1080px' height='1080px' src='/img/designs/Nyxx.png' className='rounded-xl' />
            </div>
            
            <div className="my-3 px-3 w-1/2 md:w-1/3 overflow-hidden">
              <Image alt='Lunar Design Logo' width='1080px' height='1080px' src='/img/designs/LunarDesign.png' className='rounded-xl' />
            </div>
          </div>
        </div>
      </div>

      <div id='contact' className='flex flex-wrap justify-center p-12 space-y-4' ref={contactRef}>
        <h1 className='text-white font-bold text-3xl'>Want to contact me?</h1>
        <div className='flex align-middle justify-center w-full'>
          <a
            href='https://github.com/jackmerrill'
            target='_blank'
            className='flex justify-center items-center px-10 py-4 w-11/12 lg:w-1/4 bg-github rounded-xl text-white font-bold text-xl'
            rel='noreferrer'
          >
            <GitHubIcon className='text-white h-6 w-6 mr-3'/>
            GitHub Profile
          </a>
        </div>
        <div className='flex align-middle justify-center w-full'>
          <a
            href='mailto:me@jackmerrill.com'
            target='_blank'
            className='flex justify-center items-center px-10 py-4 w-11/12 lg:w-1/4 bg-gray-900 rounded-xl text-white font-bold text-xl'
            rel='noreferrer'
          >
            <MailIcon className='text-white h-6 w-6 mr-3'/>
            Email
          </a>
        </div>
        <div className='flex align-middle justify-center w-full'>
          <a
            href='https://twitter.com/jack__merrill'
            target='_blank'
            className='flex justify-center items-center px-10 py-4 w-11/12 lg:w-1/4 bg-twitter rounded-xl text-white font-bold text-xl'
            rel='noreferrer'
          >
            <TwitterIcon className='text-white h-6 w-6 mr-3'/>
            Twitter
          </a>
        </div>
      </div>

    </>
  )
}

export default IndexPage
