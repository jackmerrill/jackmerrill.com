import { PencilIcon, CodeIcon, ServerIcon } from '@heroicons/react/outline'

const links = [
  {
    name: 'Web Development',
    href: '#projects',
    description:
      'I\'ve used Next.js, Express.js, and Flask for backends, and TailwindCSS, Bootstrap, and Material Design for frontends.',
    icon: CodeIcon,
  },
  {
    name: 'Server Management',
    href: '#projects',
    description:
      'I have lots of experience with managing servers, whether they are on-premises or cloud servers. I have experience using and managing Docker instances as well as databases.',
    icon: ServerIcon,
  },
  {
    name: 'Graphic Design',
    href: '#graphics',
    description:
      'My front-end experience stemmed from my graphic design skills. I have used Adobe Illustrator, Affinity Designer, Inkscape, and other graphic programs.',
    icon: PencilIcon,
  },
]

export default function Skills() {
  function calculateAge() {
    var ageDifMs = Date.now() - new Date('July 13, 2004').getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div className="bg-gray-900" id="about" >
      {/* Header */}
      <div className="relative pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Hey there!</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            I&apos;m Jack, a {calculateAge()} year old web developer from Chicago. I&apos;ve been programming since 2014 creating great things with Javascript, Python, HTML and CSS, and more.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          My Skills
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {links.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  See more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}