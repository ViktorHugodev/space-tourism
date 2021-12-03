import styles from './styles.module.scss'
import { useSidebar } from '../../contexts/SideBarContext'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import Link from 'next/link'

export function MobileNav() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <>
      {!isSidebarOpen ? (
        <button
          className={styles.mobile}
          onClick={toggleSidebar}

        >
          <FiAlignJustify fontSize="24" />

        </button>
      ) : (
        <aside className={styles.wrapper}>
          <button
            onClick={toggleSidebar}
            className={styles.button}

          >
            <FiX fontSize="28" />
          </button>
          <ul className={styles.list}>
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/destination" >Destination</Link>
            </li>
            <li>
              <Link href="/crew" >Crew</Link>
            </li>
            <li>
              <Link href="/technology" >Technology</Link>
            </li>
          </ul>

        </aside>
      )}


    </>
  )

}
