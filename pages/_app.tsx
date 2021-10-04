import React from 'react'
import { AppProps } from 'next/app'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
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
