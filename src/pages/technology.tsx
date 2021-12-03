import { NavBar } from "../components/NavBar";
import styles from '../styles/technology.module.scss'
import Image from 'next/image'
import { useState } from "react";
import data from '../../data.json'
import { isDesktop, isTablet } from 'react-device-detect'

export default function Technology() {
  const [activeTechnology, setActiveTechnology] = useState<number>(0)
  const technologyData = data.technology[activeTechnology]
  // console.log(isDesktop)
  return (
    <>
      <NavBar />
      <div className={styles.Container}>
        {/* <h3>Space Launch</h3> */}
        <main className={styles.main}>
          <ul className={styles.buttons}>

            {data.technology.map((tech, index) => (
              <li key={tech.name}>

                <button
                  className={activeTechnology === index ? styles.active : ''}
                  onClick={() => (setActiveTechnology(index))}
                >
                  {index + 1}
                </button>
              </li>
            ))}

          </ul>
          <section className={styles.text}>
            <span>THE TERMINOLOGY…</span>
            <strong>{technologyData.name}</strong>
            <p>{technologyData.description}</p>
          </section>
          <div className={styles.tech}>

            <div className={styles.image}>
              <Image

                src={technologyData.images.portrait}
                layout="fill"
                alt={technologyData.name}
                // objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className={styles.image2}>
              <Image

                src={technologyData.images.landscape}
                layout="fill"
                alt={technologyData.name}
                // objectFit="cover"
                objectPosition="center"
              />
            </div>




          </div>
        </main>
      </div>
    </>
  )
}