import React, { useEffect, useState } from 'react';

import { Photographer, Photographers } from '../interfaces'

import Nav from '../components/nav/nav';
import Profile from '../components/profile/profile';

import styles from '../styles/home.module.scss';

interface Props {
    photographers: Photographers
}

function Home({ photographers }: Props): JSX.Element | null {
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('');

  const compiledTags = new Set(photographers.map(photographer => photographer.tags).flat())
  const tags = Array.from(compiledTags)

  useEffect(() => {
    if (photographers) {
      setLoading(false)
    }
  })

  return (
    loading
      ? <div>Loading</div>
      : <>
        <Nav tags={tags} setSelectedTag={setSelectedTag} />
      
        <main>
          <h1 className={styles.home_title}>Photographes</h1>
          <ul className={styles.profiles}>
            {photographers.map((photographer: Photographer, i: number) => (
              selectedTag.length
                ? photographer.tags.includes(selectedTag) && <Profile photographer={photographer} key={i}/>
                : <Profile photographer={photographer} key={i}/>
            ))}
          </ul>
        </main>
      </>
  )
}

export async function getStaticProps(): Promise<Record<string, unknown>> {
  const res = await fetch('https://raw.githubusercontent.com/marie-bu/MarieBurki_6_23022021/main/FishEyeDataFR.json')
  const data = await res.json()
  return {
    props: {
      photographers: data.photographers,
    }
  }
}

export default Home;