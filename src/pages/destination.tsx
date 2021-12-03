import { NavBar } from '../components/NavBar'
import styles from '../styles/destination.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import data from '../../data.json'


export default function Destionation() {
  const [activeDestination, setActiveDestination] = useState<number>(0)
  const destinationData = data.destinations[activeDestination]
  console.log(destinationData)
  return (
    <>
      <NavBar />
      <div className={styles.Container}>
        <Head>
          <title>{destinationData.name}</title>
        </Head>
        <h3>Pick your destination</h3>
        <main className={styles.main}>
          <section className={styles.planet}>
            <Image
              src={destinationData.images.png}
              alt="Moon image"
              objectFit="cover"
              height="450px"
              width="450px"
              // layout="fill"
              className={styles.ImgPlanet}

            />
          </section>
          <section className={styles.info}>

            <ul className={styles.planetList}>
              {data.destinations.map((destination, index) => (
                <li key={destination.name}>
                  <button
                    className={activeDestination === index ? styles.Active : ''}
                    onClick={() => setActiveDestination(index)}>{destination.name}</button>
                </li>

              ))}

            </ul>

            <h2>{destinationData.name}</h2>
            <p>{destinationData.description}</p>
            <div className={styles.subinfos}>
              <div className={styles.distance}>
                <span>Avg Distance</span>
                <strong>{destinationData.distance}</strong>
              </div>
              <div className={styles.distance}>
                <span>Est travel time</span>
                <strong>{destinationData.travel}</strong>
              </div>
            </div>
          </section>

        </main>



      </div>
    </>
  )
}