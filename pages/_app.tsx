import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/dist/client/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = () => {
        setLoading(true);
      }
      const handleComplete = () => {
        setTimeout(() => setLoading(false), 300)
      }

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)
  })

  return <>
    <div id='app'>
      <main className="bg-gray-800 w-full h-full min-h-screen">
        <div id='loader' className={`flex justify-center items-center align-middle fixed dark:bg-gray-800 ${loading ? 'h-screen w-screen z-50 opacity-100' : 'z-10 opacity-0'} transform transition-all duration-300`} />
        <Navbar links={[
          { label: 'Home', href: '/' },
          { label: 'My Work', href: '#projects' },
          { label: 'Designs', href: '#designs' },
        ]} />
        <DefaultSeo {...SEO}/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  </>
}

export default MyApp
