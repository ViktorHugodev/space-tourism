import type { NextPage } from 'next'
import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <NavBar />
      <Head>
        <title>Space Tourism</title>

      </Head>
      <main className={styles.boxItens}>
        <div className={styles.text}>
          <strong>SO, YOU WANT TO TRAVEL TO</strong>
          <h3>SPACE</h3>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className={styles.circle}>
          <Link href="/destination">
            <a  >

              EXPLORE
            </a>
          </Link>
        </div>
      </main>


    </div>
  )
}

export default Home
