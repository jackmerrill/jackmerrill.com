const projects = [
  {
    title: 'Lunar Design',
    href: 'https://github.com/DesignByLunar',
    category: { name: 'Organization', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'American counterpart of the French-American duo making software that\'s out of this world.',
  },
  {
    title: 'BlueJay',
    href: 'https://bluejay.one',
    category: { name: 'SaaS', color: 'bg-blue-100 text-blue-800' },
    description:
      'Amazing Ro-Tech solutions for everyone, completely free.',
  },
  {
    title: 'Snacc.chat',
    href: 'https://snacc.chat',
    category: { name: 'CodeDay', color: 'bg-red-100 text-red-800' },
    description:
      'A social network made in 24 hours at CodeDay.',
  },
  {
    title: 'SCP Mobile',
    href: 'https://github.com/jackmerrill/SCP-Mobile',
    category: { name: 'Project', color: 'bg-purple-100 text-purple-800' },
    description:
      'Mobile (iOS) app for the SCP Wiki. Made in 24 hours at CodeDay.',
  },
  {
    title: 'Family Guy Quotes bot',
    href: 'https://github.com/jackmerrill/FamilyGuyQuotesBot',
    category: { name: 'Project', color: 'bg-purple-100 text-purple-800' },
    description:
      'Uses Discord slash commands to send random Family Guy quotes.',
  },
  {
    title: 'OOFS',
    href: 'https://github.com/oofs-project/oofs',
    category: { name: 'Project', color: 'bg-purple-100 text-purple-800' },
    description:
      'Online Orientated File Storage. Made in 24 hours at CodeDay. Won Best in Show.',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <div className="text-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="space-y-4">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-50 sm:text-4xl">Recent projects</h2>
          <p className="mt-3 text-xl text-gray-200 sm:mt-4">
            Here&apos;s what I&apos;ve been working on!
          </p>
          <h2 className="text-2xl tracking-tight font-bold text-gray-50 sm:text-3xl">Current Job</h2>
          <p className="mt-3 text-lg text-gray-200 sm:mt-4">
            UX Engineer / Web Developer for
            {' '}
            <a href="https://merch.co" className="text-blue-400 font-bold" target="_blank">
              Merch
            </a>
            .
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {projects.map((project) => (
            <div key={project.title}>
              <div>
                <div className="inline-block">
                  <span
                    className={classNames(
                      project.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {project.category.name}
                  </span>
                </div>
              </div>
              <a href={project.href} target="_blank" className="block mt-4">
                <p className="text-xl font-semibold text-gray-50">{project.title}</p>
                <p className="mt-3 text-base text-gray-200">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="w-full text-center font-bold py-6">Looking for more? <a className="text-blue-100" href="https://github.com/jackmerrill" target="_blank">Check my GitHub.</a></p>
    </div>
  )
}