import Link from 'next/link'
import Navbar from '../components/Navbar'

function GetTimeString(): string {
  const hours = new Date().getHours()

  if (hours < 12) {
    return 'Morning'
  } else if (hours >= 12 && hours <= 17) {
    return 'Afternoon'
  } else if (hours >= 17 && hours <= 24) {
    return 'Evening'
  }
}

const IndexPage = () => (
  <div id='app'>
    <main className="bg-gray-800 w-screen h-full min-h-screen">
      <Navbar links={[
        { label: 'Home', href: '/' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Projects', href: '/projects' },
      ]} />

      <header className="flex flex-wrap flex-col overflow-hidden space-y-2 px-36 items-center justify-center h-screen w-screen">
        <div className="my-3 px-3 w-full text-center">
          <h1 className="text-white font-extrabold md:text-6xl text-3xl">Good <span className="text-blue-500">{GetTimeString()}</span>! I&apos;m <span className="text-purple-400">Jack Merrill</span>.</h1>
        </div>
        <div className="my-3 px-3 w-full text-center">
          <h2 className="text-white font-bold md:text-4xl text-2xl">A Graphic and UI/UX Designer and Fullstack Developer from Chicago.</h2>
        </div>
        <div className="inline-flex items-center justify-center content-center space-x-4 my-3 px-3 w-full text-center">
          <Link href="/portfolio">
            <a className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-xl font-bold text-white">
              See my Work
            </a>
          </Link>
          <span className="text-sm font-light text-gray-400">or</span>
          <Link href="mailto:me@jackmerrill.com">
            <a className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-xl font-bold text-white">
              Contact Me
            </a>
          </Link>
        </div>
      </header>
    </main>
  </div>
)

export default IndexPage
