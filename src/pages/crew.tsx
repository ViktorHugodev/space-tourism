import { NavBar } from '../components/NavBar'
import styles from '../styles/crew.module.scss'
import Head from 'next/head'
import data from '../../data.json'
import Image from 'next/image'
import { useState } from 'react'


export default function Crew() {
  const [activeCrew, setActiveCrew] = useState<number>(0)
  const crewData = data.crew[activeCrew]
  console.log(data.crew)
  return (
    <>
      <NavBar />
      <div className={styles.Container}>
        <div>

        </div>
        <Head>
          <title>{crewData.name}</title>
        </Head>
        <h3>Meet your crew</h3>
        <main className={styles.main}>
          <section className={styles.bio}>
            <span>{crewData.role}</span>
            <h4>{crewData.name}</h4>
            <p>{crewData.bio}</p>

            <ul>
              {data.crew.map((crew, index) => (
                <li key={crew.name}>
                  <button
                    className={activeCrew === index ? styles.active : ''}
                    onClick={() => setActiveCrew(index)}></button>
                </li>
              ))}

            </ul>
          </section>
          <section className={styles.picture}>
            <picture>
              <source
                srcSet={crewData.images.webp}
                type="image/webp" />
              <Image src={crewData.images.png}
                // layout="fill"
                width={550}
                height={700}
                alt={crewData.name} />

            </picture>
          </section>
        </main>
      </div>
    </>
  )
}