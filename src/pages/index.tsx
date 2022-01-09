import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Link = {
  href: string
  text: string
}

const links: Link[] = [
  { href: '/', text: 'Home' },
  { href: '/works', text: 'Portfolio' },
]
const socials: Link[] = [
  { href: 'https://www.linkedin.com/in/novankuncoro/', text: 'LinkedIn' },
  { href: 'https://github.com/koentjoroo/', text: 'GitHub' },
  { href: 'mailto:enerka4ig@gmail.com', text: 'Mail' },
]

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <nav className="hidden md:block py-8 px-16 w-full">
        <div className="mx-auto container flex items-center justify-between gap-8">
          <ul className="flex items-center gap-8">
            {links.map(link => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a
                    className={
                      link.href === router.asPath
                        ? 'font-bold'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }>
                    {link.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="py-8 lg:py-16 px-2 md:px-4 lg:px-8 xl:px-16 text-center lg:text-left">
        <div className="mx-auto container flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-slate-500 tracking-wide">Hello! My name is</p>
            <h1 className="lg:leading-relaxed font-heading font-black text-7xl text-pink-500 dark:text-pink-600 tracking-tight">
              Novan Rahmat Kuncoro
            </h1>
            <p className="max-w-prose text-slate-800 dark:text-slate-300 leading-relaxed text-xl">
              Web developer specialized in{' '}
              <strong>Front End Web Development</strong> who is currently
              learning backend dev using The Go Programming Language
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-baseline lg:gap-8">
            <a
              href="https://drive.google.com/file/d/1Z0KZvIOcHwZ2uGHmy8GbQKKWm7-UgkNr/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 px-8 py-4 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white font-bold rounded-md">
              Get Resume &rarr;
            </a>
            <Link href="/works">
              <a className="font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors duration-50">
                ... or check my past works
              </a>
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-8 lg:py-16 px-2 md:px-4 lg:px-8 xl:px-16">
        <ul className="flex items-center justify-center lg:justify-start gap-4">
          {socials.map(link => (
            <li key={link.href}>
              <Link href={link.href}>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default Home
