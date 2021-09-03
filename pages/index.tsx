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
          <h1 className="text-white font-extrabold md:text-6xl text-3xl">Good <span className="text-blue-500">{timeString}</span>! I&apos;m <span className="text-purple-500">Jack Merrill</span>.</h1>
        </div>
        <div className="my-3 px-3 w-full text-center">
          <h2 className="text-white font-bold md:text-4xl text-2xl">A {calculateAge()} year old Graphic and UI Designer and Fullstack Developer from the Windy City.</h2>
        </div>
        <div className="inline-flex flex-wrap md:space-y-0 space-y-4 pt-4 items-center justify-center content-center md:space-x-4 my-3 px-3 w-full text-center">
          <Link href="#projects">
            <a className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-xl font-bold text-white md:w-1/6 w-full">
              See my Work
            </a>
          </Link>
          <span className="text-sm font-light text-gray-400 md:block hidden">or</span>
          <Link href="mailto:me@jackmerrill.com">
            <a className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-xl font-bold text-white md:w-1/6 w-full">
              Contact Me
            </a>
          </Link>
        </div>
      </header>
      <div className='bg-gradient-to-b from-purple-600 to-purple-700 h-full lg:max-h-96' ref={aboutRef}>
        <div className='flex flex-wrap py-16 px-4 p lg:p-16 space-y-6'>
          <div className='w-full overflow-hidden'>
            <h1 className='text-white text-4xl font-bold text-center'>Nice to meet you!</h1>
          </div>
          <div className='w-full px-12 lg:px-48'>
            <p className='text-white text-2xl text-center'>
              I&apos;m Jack, a {calculateAge()} year old Graphic/UI Designer and Fullstack Developer from Chicago. Since I started
              programming in 2014, I&apos;ve used Python, NodeJS, HTML and CSS. Nowadays, I prefer to
              use NextJS, TailwindCSS, and NodeJS. Being a fullstack developer, I&apos;ve
              had to create numerous logos and brands for various projects of mine.
            </p>
          </div>
        </div>
      </div>
      <div className='-mt-10'>
        <div className='flex flex-wrap lg:px-64 lg:space-y-0 px-12 space-y-6'>
          <div className='flex flex-wrap justify-center text-center py-12 lg:w-1/2 w-full min-h-96 max-h-full space-y-2 bg-white rounded-xl lg:rounded-l-xl lg:rounded-r-none border shadow-lg'>
            <div className='w-full flex flex-wrap justify-center'>
              <CodeIcon className='h-36 text-green-500 rounded-full bg-gray-100 p-5' />
            </div>
            <div className='w-full space-y-3 px-6'>
              <h1 className='text-gray-800 font-bold text-2xl'>Fullstack Developer</h1>
              <p className='text-gray-800 text-xl font-light'>I strive to make great things.</p>
              <h2 className='text-purple-500 font-bold text-xl'>What I&apos;ve made:</h2>
              <p className='text-gray-800 text-lg font-light'>SaaS applications, Image websites, Social Networks</p>
              <h2 className='text-purple-500 font-bold text-xl'>Tools I use:</h2>
              <ol>
                <li className='text-gray-800 text-lg font-light'>Next.js</li>
                <li className='text-gray-800 text-lg font-light'>Node.js / Express</li>
                <li className='text-gray-800 text-lg font-light'>MongoDB</li>
                <li className='text-gray-800 text-lg font-light'>PostgreSQL</li>
                <li className='text-gray-800 text-lg font-light'>Docker</li>
              </ol>
            </div>
          </div>
          <div className='flex flex-wrap justify-center text-center my-px py-12 lg:w-1/2 w-full min-h-96 max-h-full space-y-2 bg-white rounded-xl lg:rounded-r-xl lg:rounded-l-none border shadow-lg'>
            <div className='w-full flex flex-wrap justify-center'>
              <DesignIcon className='h-36 text-green-500 rounded-full bg-gray-100 p-5' />
            </div>
            <div className='w-full space-y-3 px-6'>
              <h1 className='text-gray-800 font-bold text-2xl'>Graphic and UI Design</h1>
              <p className='text-gray-800 text-xl font-light'>I like to create designs and brands.</p>
              <h2 className='text-purple-500 font-bold text-xl'>What I enjoy designing:</h2>
              <p className='text-gray-800 text-lg font-light'>Brands, Logos, Banners, Headers</p>
              <h2 className='text-purple-500 font-bold text-xl'>Tools I use:</h2>
              <ol>
                <li className='text-gray-800 text-lg font-light'>Affinity Designer</li>
                <li className='text-gray-800 text-lg font-light'>Figma</li>
                <li className='text-gray-800 text-lg font-light'>TailwindCSS</li>
                <li className='text-gray-800 text-lg font-light'>Bootstrap</li>
                <li className='text-gray-800 text-lg font-light'>React.js</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div id='projects' className='flex flex-wrap justify-center px-12 lg:px-64 pt-24 space-y-3' ref={projectsRef}>
        <h1 className='w-full font-bold text-white text-center text-3xl'>My recent work</h1>
        <p className='w-full font-semibold text-white text-center text-xl'>Here are a few projects I&apos;ve been working on!</p>
        <div className="flex flex-wrap w-full -mx-1 overflow-hidden justify-center">

          <div className="flex my-1 w-full overflow-hidden rounded-xl relative h-36">
            {/* <Image alt='Stryx Photo' layout='fill' src='/img/Stryx.png' objectFit='cover' objectPosition='top' className='absolute rounded-xl filter blur-xl' /> */}
            <div className='flex flex-wrap items-center content-center justify-end w-full h-full text-right transition transform duration-200 p-12 space-y-2'>
              <h1 className='w-full text-white font-bold text-3xl'>Lunar Design</h1>
              <p className='w-full text-white font-light text-xs'>American counterpart of the French-American duo making software that&apos;s out of this world.</p>
              <a className='flex bg-green-500 items-center justify-center px-2 py-1 rounded-xl text-white w-2/3 sm:w-1/3' href='https://github.com/designbylunar/' target='_blank' rel='noreferrer'>Visit</a>
            </div>
          </div>

          <div className="flex my-1 w-full overflow-hidden rounded-xl relative h-36">
            <Image alt='Stryx Photo' layout='fill' src='/img/Stryx.png' objectFit='cover' objectPosition='top' className='absolute rounded-xl filter blur-xl' />
            <div className='flex flex-wrap items-center content-center justify-end w-full h-full text-right transition transform duration-200 p-12 space-y-2'>
              <h1 className='w-full text-white font-bold text-3xl'>Stryx</h1>
              <p className='w-full text-white font-light text-xs'>Roblox Group Management made easy (defunct, no long associated)</p>
              <a className='flex bg-green-500 items-center justify-center px-2 py-1 rounded-xl text-white w-2/3 sm:w-1/3' href='https://stryx.cloud' target='_blank' rel='noreferrer'>Visit</a>
            </div>
          </div>
          
          <div className="flex my-1 w-full overflow-hidden rounded-xl relative h-36">
            <Image alt='Snacc.chat Photo' layout='fill' src='/img/Snacc.chat.png' objectFit='cover' objectPosition='top' className='absolute rounded-xl filter blur-xl' />
            <div className='flex flex-wrap items-center content-center justify-end w-full h-full text-right transition transform duration-200 p-12 space-y-2'>
              <h1 className='w-full text-white font-bold text-3xl'>Snacc.chat</h1>
              <p className='w-full text-white font-light text-xs'>Made in 24 hours at <a className='font-bold' href='https://codeday.org' target='_blank' rel='noreferrer'>CodeDay</a>, Snacc.chat is a simple social network for programmers alike.</p>
              <a className='flex bg-green-500 items-center justify-center px-2 py-1 rounded-xl text-white w-2/3 sm:w-1/3' href='https://snacc.chat' target='_blank' rel='noreferrer'>Visit</a>
            </div>
          </div>

          <div className="flex my-1 w-full overflow-hidden rounded-xl relative h-36">
            <Image alt='FRCMS Docs Photo' layout='fill' src='/img/FRCMS.png' objectFit='cover' objectPosition='top' className='absolute rounded-xl filter blur-xl' />
            <div className='flex flex-wrap items-center content-center justify-end w-full h-full text-right transition transform duration-200 p-12 space-y-2'>
              <h1 className='w-full text-white font-bold text-3xl'>FRCMS</h1>
              <p className='w-full text-white font-light text-xs'>FIRST Robotics CMS (WIP)</p>
              <a className='flex bg-green-500 items-center justify-center px-2 py-1 rounded-xl text-white w-2/3 sm:w-1/3' href='https://dev.frcms.app' target='_blank' rel='noreferrer'>Visit</a>
            </div>
          </div>

          <div className="flex my-1 w-full overflow-hidden rounded-xl relative h-36">
            <Image alt='Ricky.cat Photo' layout='fill' src='/img/Ricky.cat.png' objectFit='cover' objectPosition='top' className='absolute rounded-xl filter blur-xl' />
            <div className='flex flex-wrap items-center content-center justify-end w-full h-full text-right transition transform duration-200 p-12 space-y-2'>
              <h1 className='w-full text-white font-bold text-3xl'>Ricky.cat</h1>
              <p className='w-full text-white font-light text-xs'>My first Next.js project! A place to share my cat. Discontinued (for now).</p>
              <a className='flex bg-green-500 items-center justify-center px-2 py-1 rounded-xl text-white w-2/3 sm:w-1/3' href='https://ricky.cat' target='_blank' rel='noreferrer'>Visit</a>
            </div>
          </div>
        </div>
      </div>
      
      <div id='designs' className='flex flex-wrap justify-center px-12 lg:px-64 pt-24 space-y-3' ref={graphicsRef}>
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
