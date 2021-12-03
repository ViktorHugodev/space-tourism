import styles from './styles.module.scss'
import Image from 'next/image'

import { MobileNav } from './MobileNav'
import { useRouter } from 'next/router'
import Link from 'next/link'


export function NavBar() {
  const router = useRouter()
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Destination",
      url: "/destination",
    },
    {
      title: "Crew",
      url: "/crew",
    },
    {
      title: "Technology",
      url: "/technology",
    },
  ]

  return (
    <header className={styles.Container}>
      <div className={styles.image}>
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width="100%"
          height="100%"
          className={styles.logo}
        />
      </div>

      <nav className={styles.NavDesk}>
        <ul>
          {links.map((link) => (
            <Link href={link.url} key={link.url}>
              <a className={
                router.pathname === link.url
                  ? styles.active
                  : ''
              } >
                <li  >{link.title}

                </li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
      <MobileNav />
    </header>
  )
}