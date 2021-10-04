import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/dist/client/router';
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
      <main className="w-full h-full min-h-screen bg-black">
        <DefaultSeo {...SEO}/>
        <Component {...pageProps} />
        <Footer />
      </main>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  </>
}

export default MyApp
